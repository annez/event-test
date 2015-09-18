"use strict";

var gulp      = require('gulp');
var config    = require('../config');

gulp.task('build', function() {
  return gulp.src(config.src + "/**/*")
    .pipe(gulp.dest(config.dest))
});
