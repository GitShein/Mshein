var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create()

var DEV = '.';

gulp.task('watch', function (cb) {
    watch('sass/*.scss', function () {
        gulp.src('sass/*.scss')
            .pipe(sass({outputStyle: 'expanded',indentWidth:'4'}))
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
    });
});

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task('serve', function() {
   /* browserSync.init({
        server: DEV + '/'
    });*/
    gulp.watch(DEV + '/example/*.html' ).on('change', browserSync.reload)
    gulp.watch(DEV + '/js/*.js').on('change', browserSync.reload)
    gulp.watch(DEV + '/css/*.css').on('change', browserSync.reload)
})

gulp.task('default',['watch']);
