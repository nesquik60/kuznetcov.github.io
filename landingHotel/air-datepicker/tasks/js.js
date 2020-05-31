var gulp = require('air-datepicker/tasks/node_modules/gulp'),
    rename = require('air-datepicker/tasks/node_modules/gulp-rename'),
    uglify = require('air-datepicker/tasks/node_modules/gulp-uglify'),
    clone = require('air-datepicker/tasks/node_modules/gulp-clone'),
    wrap = require('air-datepicker/tasks/node_modules/gulp-wrap'),
    concat = require('air-datepicker/tasks/node_modules/gulp-concat');

module.exports = function () {
    var stream = gulp.src([
        'src/js/datepicker.js',
        'src/js/body.js',
        'src/js/navigation.js',
        'src/js/timepicker.js'
    ])
        .pipe(concat('datepicker.js'))
        .pipe(wrap(';(function (window, $, undefined) { <%=contents%> })(window, jQuery);'));

    stream.pipe(clone())
        .pipe(gulp.dest('dist/js'));

    stream.pipe(clone())
        .pipe(uglify())
        .pipe(rename('datepicker.min.js'))
        .pipe(gulp.dest('dist/js'))

};