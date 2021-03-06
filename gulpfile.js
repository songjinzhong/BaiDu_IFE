/**
 * Created by haven on 16/8/24.
 */
var gulp = require('gulp');
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var stylus = require('gulp-stylus');

gulp.task('default', ['1-9', 'song_watch']);

gulp.task('bao-1-8', function () {
  return gulp.src('./stage1/task8/bao/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./stage1/task8/bao/css/'));
});

gulp.task('bao-1-8:watch', function () {
  gulp.watch('./stage1/task8/bao/sass/**/*.sass', ['bao-1-8']);
});


gulp.task('bao-1-10', function () {
  return gulp.src('./stage1/task10/bao/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./stage1/task10/bao/css/'));
});

gulp.task('bao-1-10:watch', function () {
  gulp.watch('./stage1/task10/bao/sass/**/*.sass', ['bao-1-10']);
});


gulp.task('1-9', function () {
  return gulp.src('./stage1/task9/stylus/style.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./stage1/task9/css/'));
});

gulp.task('1-9:watch', function () {
  gulp.watch('./stage1/task9/stylus/**/*.styl', ['1-9']);
});

/*
 bao
 */

const bao_path = {
  task1_11_stylus: "./stage1/task11/bao/style.styl",
  task1_11_stylus_dest: "./stage1/task11/bao/css/",
  task1_17_stylus: "./stage2/task17/bao/style.styl",
  task1_17_stylus_dest: "./stage2/task17/bao/css/"
}

gulp.task('bao_stylus', function () {
  return gulp.src(bao_path.task1_17_stylus)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(bao_path.task1_17_stylus_dest));
});
gulp.task("bao_watch", function () {
  gulp.watch(bao_path.task1_17_stylus, ['bao_stylus'])
})

/**
 * song contron here
 */
var song_paths = {
  task_stylus: "stage1/task10/song/stylus/*.styl",
  task_stylus_dest: "stage1/task10/song/css",
  task1_9_stylus: "stage1/task9/stylus/*.styl",
  task1_9_stylus_dest: "stage1/taks9/css"
}

gulp.task('song_stylu', function () {
  return gulp.src(song_paths.task_stylus)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(song_paths.task_stylus_dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(song_paths.task_stylus_dest));
});
gulp.task("song_watch", function () {
  gulp.watch(song_paths.task1_9_stylus, ['1-9']);
});