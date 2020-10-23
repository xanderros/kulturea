var gulp         = require('gulp');
var config       = require('../config');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');


// Concat and uglify Javascript
gulp.task('js', function () {
	return gulp
		.src(config.src.jsAll)
        .pipe(concat('script.js'))
		.pipe(uglify())
        .pipe(gulp.dest(config.dest.js));
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.js + '/**/*.js', ['js']);
});