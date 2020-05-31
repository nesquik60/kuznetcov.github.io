var gulp = require('air-datepicker/tasks/node_modules/gulp'),
    plumber = require('air-datepicker/tasks/node_modules/gulp-plumber'),
    _jade =  require('air-datepicker/tasks/node_modules/jade'),
    jade = require('air-datepicker/tasks/node_modules/gulp-jade');

_jade.filters.code = function( block ) {
    return block
        .replace( /\&hellip;/g, '…'  )
        .replace( /&/g, '&amp;'  )
        .replace( /</g, '&lt;'   )
        .replace( />/g, '&gt;'   )
        .replace( /"/g, '&quot;' )
        .replace( /#/g, '&#35;'  )
        .replace( /\\/g, '\\\\'  );
};

module.exports = {
    ru: function () {
        gulp.src('docs/jade/pages/index-ru.jade')
            .pipe(plumber())
            .pipe(jade({
                data: {
                    lang: 'ru'
                }
            }))
            .pipe(gulp.dest('docs/'))
    },
    en: function () {
        gulp.src('docs/jade/pages/index.jade')
            .pipe(plumber())
            .pipe(jade({
                data: {
                    lang: 'en'
                }
            }))
            .pipe(gulp.dest('docs/'))
    }
};