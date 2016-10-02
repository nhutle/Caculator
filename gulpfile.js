var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

// Lint JS code
gulp.task('lint', function() {
  return gulp.src([
      'javascripts/**/*.js',
      '!javascripts/main.min.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Concat and Minify CSS
gulp.task('style', function() {
  return gulp.src([
      'styles/**/*.css',
      '!styles/**/*.min.css',
      '!styles/**/*.min.css.map'
    ])
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('styles'))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('style-build', function() {
  return gulp.src([
      'styles/**/*.css',
      '!styles/**/*.min.css'
    ])
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});


// Concatenate and Minify JS
gulp.task('script', function() {
  return gulp.src([
      'javascripts/**/*.js',
      '!javascripts/main.min.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('javascripts'));
});

gulp.task('script-build', function() {
  return gulp.src([
      'javascripts/**/*.js',
      '!javascripts/main.min.js'
    ])
    .pipe(concat('main.js'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/javascripts'));
});


// Copy files
gulp.task('copy', function() {
  gulp.src('*.html')
    .pipe(gulp.dest('dist'));
});


// Clean dist folder
gulp.task('clean', function() {
  return gulp.src('./dist/**/*.*', { read: false })
    .pipe(rimraf({ force: true }));
});


// Default task
gulp.task('default', ['style', 'lint', 'script'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('javascripts/**/*.*', ['lint', 'script']);
  gulp.watch('styles/**/*.*', ['style']);
  gulp.watch('javascripts/**/*.js').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});

// Build task
gulp.task('build', ['clean', 'copy', 'style-build', 'lint', 'script-build'], function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
});
