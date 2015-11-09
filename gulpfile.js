var gulp = require("gulp");
var requireDir = require('require-dir');
var _tasks = requireDir('./gulp-tasks');
var mocha = require('gulp-mocha');
var babel = require('babel-core/register');

gulp.task("test",function () {
  return gulp.src("test/**/*.js")
    .pipe(mocha({
      reporter: 'nyan',
      compilers: babel
    }));
});

gulp.task("default",["browser-bundle",'browser-vendor',"test"],function () {
  gulp.watch('src/**/*.js',["test"]);
  gulp.watch('test/**/*.js',["test"]);
});
