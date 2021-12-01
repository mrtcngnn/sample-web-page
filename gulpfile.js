const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function watch(){
    return gulp.src('./content/style/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./content/style/style.css'))
}

exports.watch = watch;

