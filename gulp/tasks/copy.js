var gulp   = require('gulp');
var config = require('../config.js');

gulp.task('copy:fonts', function() {
    return gulp
        .src(config.src.fonts + '/**/*.{ttf,otf,eot,woff,woff2,txt}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:img', function() {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,gif,ico}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy:favicons', function() {
	return gulp
        .src([
            config.src.favicons + '/**/*.{png,svg,webmanifest,ico,xml}'
        ])
        .pipe(gulp.dest(config.dest.favicons));
});

gulp.task('copy:php', function() {
	return gulp
			.src([
				config.src.root + '/php/*.*'
			])
			.pipe(gulp.dest(config.dest.root));
});

gulp.task('copy', [
    'copy:img',
    'copy:favicons',
    'copy:fonts'
]);
gulp.task('copy:watch', function() {
    gulp.watch(config.src.img+'/*', ['copy']);
});
