var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var using = require('gulp-using');
var log = require('fancy-log');

var paths = {
    sass: ['./scss/**/*.scss']
};

//gulp.task('default', ['sass']);

// gulp.task('sass', function(done) {

//   return gulp.src('/scss/app.scss')
//     .pipe(using({}))
//     .pipe(sass())
//     .pipe(cleanCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(rename({ extname: '.min.css' }))
//     .pipe(gulp.dest('./www/css/'))
//     .on('end', done);

// });


gulp.task('sass', function() {
    log(" HELLO ");
    return gulp.src('scss/app.scss')
        .pipe(debug({ title: 'unicorn:' }))
        .pipe(sass())
        .pipe(gulp.dest('./www/css/'));
});




gulp.task('watch', ['sass'], function () {
    gulp.watch(paths.sass, ['sass']);
});
