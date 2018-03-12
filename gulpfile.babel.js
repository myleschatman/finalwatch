import gulp from 'gulp';
import eslint from 'eslint';
import buffer from 'gulp-buffer';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import del from 'del';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import nodemon from 'gulp-nodemon';
import browserify from 'browserify';
import browserSync from 'browser-sync';

gulp.task('clean', () => {
  del(['build/**/*.*']);
});

gulp.task('style', () => {
  return gulp.src([
    './src/**/*.js',
    './*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('static', () => {
  return gulp.src('./static/**/**')
    .pipe(gulp.dest('./build'));
});

gulp.task('libs', ['static'], () => {
  return gulp.src(['./node_modules/phaser/build/phaser.min.js',
    './node_modules/socket.io-client/dist/socket.io.js'
  ])
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('build', ['libs'], () => {
  return browserify({
    entries: './src/index.js',
    debug: true
  })
    .transform(babelify, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify()).on('error', (err) => {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./build/scripts'))
    .pipe(browserSync.stream());
});

gulp.task('server', ['build', 'static'], (cb) => {
  let running = false;

  return nodemon({
    script: 'server.js'
  }).on('start', () => {
    if (!running) {
      cb();
      running = true;
    }
  }).on('restart', () => {
    setTimeout(() => {
      browserSync.reload();
    }, 2000);
  });
});

gulp.task('serve', ['server'], () => {
  browserSync.init({
    proxy: 'http://localhost:8081',
    browser: 'chrome',
    port: 3000
  });
  
  gulp.watch('./src/**/*.js', ['build']).on('change', browserSync.reload);
  gulp.watch('./static/**/*', ['static']).on('change', browserSync.reload);
});

gulp.task('default', ['clean', 'static', 'libs', 'build', 'server', 'serve']);