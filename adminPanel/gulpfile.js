const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sa   ss", function () {
  return gulp
    .src("/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("/css"));
});