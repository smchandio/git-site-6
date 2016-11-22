var gulp = require('gulp'),
browserSync = require('browser-sync'),
watch = require('gulp-watch');


// gulp.task('', function(){

// });


gulp.task('html', function(){
    browserSync.reload();
});



 gulp.task('watch', function(){

            browserSync.init({
                server: {
                    baseDir: 'app'
                }
            });


            watch('./app/index.html', function(){
                    gulp.start('html');
            });

            watch('./app/assets/styles/**/*.css', function(){
                    gulp.start('cssInject');
            });    

 });