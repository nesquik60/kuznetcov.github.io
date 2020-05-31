var gulp = require('air-datepicker/tasks/node_modules/gulp'),
    rename = require('air-datepicker/tasks/node_modules/gulp-rename'),
    sass = require('air-datepicker/tasks/node_modules/gulp-sass'),
    postcss = require('air-datepicker/tasks/node_modules/gulp-postcss'),
    autoprefixer = require('air-datepicker/tasks/node_modules/autoprefixer')({ browsers: ['last 2 versions'] }),
    clone = require('air-datepicker/tasks/node_modules/gulp-clone'),
    minify = require('air-datepicker/tasks/node_modules/gulp-minify-css'),
    concat = require('air-datepicker/tasks/node_modules/gulp-concat');

module.exports = function () {
    var stream = gulp.src('src/sass/*.scss')
        .pipe(concat('datepicker.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]));

    stream.pipe(clone())
        .pipe(minify())
        .pipe(rename('datepicker.min.css'))
        .pipe(gulp.dest('dist/css'));

    stream.pipe(clone())
        .pipe(rename('datepicker.css'))
        .pipe(gulp.dest('dist/css'))
};