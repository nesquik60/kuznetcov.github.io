var gulp = require('air-datepicker/tasks/node_modules/gulp'),
    rename = require('air-datepicker/tasks/node_modules/gulp-rename'),
    sass = require('air-datepicker/tasks/node_modules/gulp-sass'),
    postcss = require('air-datepicker/tasks/node_modules/gulp-postcss'),
    autoprefixer = require('air-datepicker/tasks/node_modules/autoprefixer')({ browsers: ['last 2 versions'] }),
    clone = require('air-datepicker/tasks/node_modules/gulp-clone'),
    minify = require('air-datepicker/tasks/node_modules/gulp-minify-css'),
    concat = require('air-datepicker/tasks/node_modules/gulp-concat');

module.exports = function () {
    gulp.src('docs/sass/init.scss')
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(minify())
        .pipe(gulp.dest('docs/css'))
};