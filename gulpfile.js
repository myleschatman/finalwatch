const gulp = require('gulp');
const eslint = require('gulp-eslint');
const buffer = require('gulp-buffer');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const del = require('del');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();

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

gulp.task('static', ['clean'], () => {
  return gulp.src('./static/**/**')
    .pipe(gulp.dest('./build'));
});

gulp.task('libs', ['static'], () => {
  return gulp.src(['./node_modules/phaser/dist/phaser.min.js'])
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

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    browser: 'chrome'
  });
  gulp.watch('./src/**/*.js', ['build']).on('change', browserSync.reload);
  gulp.watch('./static/**/*', ['static']).on('change', browserSync.reload);
});

gulp.task('default', ['clean', 'static', 'libs', 'build', 'serve']);