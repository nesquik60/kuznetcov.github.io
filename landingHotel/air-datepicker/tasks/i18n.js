var gulp = require('air-datepicker/tasks/node_modules/gulp'),
    rename = require('air-datepicker/tasks/node_modules/gulp-rename'),
    wrap = require('air-datepicker/tasks/node_modules/gulp-wrap'),
    sass = require('air-datepicker/tasks/node_modules/gulp-sass'),
    clone = require('air-datepicker/tasks/node_modules/gulp-clone'),
    concat = require('air-datepicker/tasks/node_modules/gulp-concat');

module.exports = function () {
    gulp.src('src/js/i18n/*.js')
        .pipe(wrap(';(function ($) { <%=contents%> })(jQuery);'))
        .pipe(gulp.dest('dist/js/i18n'))
};
