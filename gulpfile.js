var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
livereload = require('gulp-livereload');

//Compile Less into CSS
gulp.task('less', function() {
  gulp.src('www/less/*.less')
    .pipe($.less())
    .pipe(gulp.dest('www/css'))
    .pipe(livereload());
});

//Watch for changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('www/less/**', ['less']);
  gulp.watch(['www/index.html','www/js/*.js','www/templates/*.htm']).on('change', livereload.changed);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['less','watch']);