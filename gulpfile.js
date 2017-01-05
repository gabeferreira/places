// Gulpfile

// Require all plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	concatCSS = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css');

var jsSources = [
	/* Lib */
	'scripts/lib/signals.min.js',
	'scripts/lib/crossroads.min.js',
	'scripts/lib/hasher.min.js',
	/* Functions */
	'scripts/db.js',
	'scripts/preloader.js',
	'scripts/launcher.js',
	'scripts/page-loader.js',
	'scripts/nav-buttons.js',
	'scripts/arrow-nav.js',
	'scripts/map.js',
	'scripts/routes.js',
	'scripts/cursor.js',
	'scripts/counter.js'
]

gulp.task('html', function() {
	gulp.src('index.html')
	.pipe(gulp.dest('www'))
	.pipe(connect.reload())
});

gulp.task('assets', function() {
	gulp.src(['fonts/**/*','img/**/*'], {
		base: '.'
	})
	.pipe(gulp.dest('www/assets'))
	.pipe(connect.reload())
})

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(uglify())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('www/assets'))
	.pipe(connect.reload())
});

gulp.task('sass', function() {
	gulp.src('styles/styles.scss')
	.pipe(sass({style: 'expanded'}))
	.pipe(gulp.dest('styles/css'))
});

gulp.task('css', function() {
	gulp.src('styles/css/styles.css')
	.pipe(cleanCSS())
	.pipe(concat('main.css'))
	.pipe(gulp.dest('www/assets'))
	.pipe(connect.reload())
});

gulp.task('connect', function() {
	connect.server({
		root: 'www',
		livereload: true
	})
});

gulp.task('watch', function() {
	gulp.watch('scripts/*.js', ['js']);
	gulp.watch('styles/*.scss', ['sass','css']);
	gulp.watch('index.html', ['html']);
});

// Run main gulp task
gulp.task('default', ['html', 'assets', 'js', 'sass', 'css', 'connect', 'watch']);