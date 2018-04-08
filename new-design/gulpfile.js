var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var config = {
    srcCss: 'src/scss/**/*.scss',
    buildCss: 'dist'
}

gulp.task('build-css', function (cb) {
    gulp.src(config.srcCss)
        .pipe(sourcemaps.init())
        // output non-minified CSS file
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.buildCss))
        
    cb()
})

gulp.task('watch', function (cb) {
    gulp.watch(config.srcCss, ['build-css'])
})

gulp.task('default', ['build-css', 'watch']);