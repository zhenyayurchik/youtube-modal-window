const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const styles = require('./styles')
const script = require('./script')

module.exports = function watch(cb) {

  gulp.watch('src/img/*.{gif,png,jpg,svg,webp}', gulp.parallel(imageMinify))
  gulp.watch('src/styles/**/*.scss', gulp.parallel(styles))
  gulp.watch('src/js/**/*.js', gulp.parallel(script))

    return cb()
}


