var gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
