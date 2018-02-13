var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var jsmin = require('gulp-jsmin');

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('minify-css', function () {
    gulp.src('assets/css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
         .pipe(gulp.dest('assets/css/'));
});

gulp.task('minify-js', function () {
    gulp.src('assets/js/myscripts.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
         .pipe(gulp.dest('assets/js/'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass', 'minify-css']);
  gulp.watch('./assets/js/*.js', ['minify-js']);
});

gulp.task('default', ['watch']);