var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-php-connect'),
    opn = require('opn');

gulp.task('connect', function() {
    connect.server();
});

gulp.task('sass', function() {
   return gulp.src('stylesheets/scss/main.scss')
     .pipe(sass({ outputStyle: 'compressed'}))
     .pipe(gulp.dest('stylesheets'));
 });

 gulp.task('open', function() {
     opn('http://localhost:8000');
 });

gulp.task('watch', function() {
  gulp.watch('stylesheets/scss/*.scss', ['sass'])
});

gulp.task('default', ['open', 'connect', 'watch']);
