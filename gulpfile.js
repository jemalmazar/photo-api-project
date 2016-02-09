var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('uglify', function(){

    gulp.src('./js/custom-instagrid.js') // What files do we want gulp to consume?
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))//notify of syntax errors
        .pipe(uglify()) // Call the uglify function on these files
        .pipe(rename({extname: '.min.js'})) //add
        .pipe(gulp.dest('./build/js')); // Where do we put the result?
});

gulp.task('sass', function() {

    gulp.src('./sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function(){
    browserSync.init({
        server: {
          baseDir:'./'
        }
    });
});

gulp.watch(['js/*.js'],['uglify']);
gulp.watch(['sass/*.scss'],['sass']);

gulp.watch(['./build/js/*.js', './build/css/*.css', 'index.html']).on('change', browserSync.reload);

gulp.task('default',['watch']);
