const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')

gulp.task('cname', () => (
  gulp.src('./src/CNAME')
    .pipe(gulp.dest('./dist'))
))

gulp.task('deploy', () => (
  gulp.src('./dist/**/*')
    .pipe(ghPages())
))
