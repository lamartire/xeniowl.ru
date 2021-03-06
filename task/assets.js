const gulp = require('gulp')
const browserSync = require('browser-sync')
const imageMin = require('gulp-imagemin')

gulp.task('move-fonts', () => {
  gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts'))
})

gulp.task('optimize-images', () => {
  gulp.src('src/assets/images/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(browserSync.stream())
})

gulp.task('pswp', () => {
  gulp.src('node_modules/photoswipe/dist/default-skin/**/*')
    .pipe(gulp.dest('dist/assets/css'))
})

gulp.task('copy-static', () => {
  gulp.src('src/static/**/*')
    .pipe(gulp.dest('dist/static'))
})

gulp.task('move-deps', ['pswp'])

gulp.task('move-assets', ['move-fonts', 'optimize-images', 'move-deps', 'copy-static'])
