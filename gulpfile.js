var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch')

var DEV = '.';

gulp.task('watch', function (cb) {
    watch('sass/*.scss', function () {
        gulp.src('sass/*.scss')
            .pipe(sass({outputStyle: 'expanded',indentWidth:'4'}))
            .pipe(gulp.dest('./css'));
    });
});

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});


gulp.task('default',['watch']);
