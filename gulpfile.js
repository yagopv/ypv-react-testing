var gulp = require("gulp"),
    plugins = require('gulp-load-plugins')();

gulp.task('compile-jsx', require('./tasks/compile-jsx')(gulp, plugins));