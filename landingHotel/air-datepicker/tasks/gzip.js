var gulp = require('air-datepicker/tasks/node_modules/gulp'),
    gzip = require('air-datepicker/tasks/node_modules/gulp-gzip');

module.exports = function (cb) {
    gulp.src('dist/js/datepicker.min.js')
        .pipe(gzip())
        .pipe(gulp.dest('dist/'))
};

