var gulp = require('air-datepicker/node_modules/gulp'),
    watch = require('air-datepicker/node_modules/gulp-watch'),
    livereload = require('air-datepicker/node_modules/gulp-livereload');

gulp.task('css', requi
re('air-datepicker/tasks/css'));
gulp.task('js', require('air-datepicker/tasks/js'));
gulp.task('i18n', require('air-datepicker/tasks/i18n'));
gulp.task('cssPage', require('air-datepicker/tasks/cssPage'));
gulp.task('jade-ru', require('air-datepicker/tasks/jade').ru);
gulp.task('jade-en', require('air-datepicker/tasks/jade').en);
gulp.task('gzip', require('air-datepicker/tasks/gzip'));

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('src/sass/*.scss', ['css']).on('change', function (file) {
        livereload.changed(file)
    });

    gulp.watch('src/js/**/*.js', ['js']).on('change', function (file) {
        livereload.changed(file)
    });

    gulp.watch('docs/sass/*.scss', ['cssPage']).on('change', function (file) {
        livereload.changed(file)
    });

    gulp.watch('docs/jade/**/*.jade', ['jade-ru', 'jade-en']).on('change', function (file) {
        livereload.changed(file)
    });
});

gulp.task('dev', ['css','js','i18n', 'cssPage', 'jade-ru', 'jade-en', 'watch']);
gulp.task('build', ['css','js','i18n', 'jade-ru', 'jade-en']);




