var gulp = require("gulp");

// gulp.task('default', function(done) {
//   console.log('HelloWorld!');
//   done();
// });
try { fsevents = require('fsevents'); } catch (error) {}

// var browserSync  = require('browser-sync');
//
// gulp.task('browser-sync', function() {
//   browserSync.init({
//       server: {
//           baseDir: "./",
//           index: "index.html"
//       }
//   });
// });
//
// gulp.task('bs-reload', function () {
//   browserSync.reload();
// });
//
// gulp.task( 'default', gulp.series( gulp.parallel( 'browser-sync' ) ), function() {
//   gulp.watch( './*.html', gulp.task( 'bs-reload' ) );
//   gulp.watch( './css/*.css', gulp.task( 'bs-reload' ) );
//   gulp.watch( './js/*.js', gulp.task( 'bs-reload' ) );
// });

const { src, dest, watch, parallel } = require("gulp"),
 browsersync = require('browser-sync').create();

const taskServer = (done) => {
 browsersync.init({
  server: {
   baseDir: './',
   index: 'index.html'
  },
  port: 2000
 })
 done();
};

const taskReload = (done) => {
 browsersync.reload();
 done();
};

// Wacth
const taskWatch = (done) => {
 watch('./**/*', taskReload);
 done();
}

exports.default = parallel(taskServer, taskWatch);

// var sass = require("gulp-sass");
//
// gulp.task("sass",function(){
//     gulp.src("scss/style.scss")
//     .pipe(sass({outputStyle: 'expanded'}))
//     .pipe(gulp.dest("css"))
// })

// gulp.task("default", function(){
//   gulp.watch("scss/**/*.scss",["sass"]);
// })
//
// gulp.task('watch', function(){
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });



var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('minjs', function() {
  return gulp.src("js/*.js")
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js/'));
});

var imagemin = require("gulp-imagemin");
var imageminPngquant = require("imagemin-pngquant");
var imageminMozjpeg = require("imagemin-mozjpeg");

var imageminOption = [
  imageminPngquant({ quality: [0.65, 0.8] }),
  imageminMozjpeg({ quality: 85 }),
  imagemin.gifsicle({
    interlaced: false,
    optimizationLevel: 1,
    colors: 256
  }),
  imagemin.mozjpeg(),
  imagemin.optipng(),
  imagemin.svgo()
];

gulp.task( 'imagemin', function() {
  return gulp
    .src( './img/base/*.{png,jpg,gif,svg}' )
    .pipe( imagemin( imageminOption ) )
    .pipe( gulp.dest( './img' ) );
});

var gulp = require('gulp');
var sass = require('gulp-sass');

var cleanCSS = require('gulp-clean-css');
var rename   = require("gulp-rename");

// gulp.task('mincss', function() {
//   return gulp.src("css/*.css")
//     .pipe(cleanCSS())
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(gulp.dest('css/'));
// });

gulp.task('sass', function() {
  // return gulp.src('./scss/**/*.scss')
  return gulp.src('./scss/style.scss')
    // .pipe(sass({outputStyle: 'expanded'}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
    // .pipe(gulp.dest('./css'));
});

var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('sass', function() {
//   return gulp.src('./scss/**/*.scss')
//     .pipe(sass({outputStyle: 'expanded'}))
//     .pipe(gulp.dest('./css'));
// });

gulp.task( 'watch', function() {
  gulp.watch( './scss/**/*.scss', gulp.task( 'sass' ) );
});
