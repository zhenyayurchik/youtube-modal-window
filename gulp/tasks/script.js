const gulp = require('gulp')
const babel = require('gulp-babel')


module.exports = function script(cb) {
    gulp.src('src/js/scripts.js')
        .pipe(babel({
            presets: ['@babel/env']
            }))
        .pipe(gulp.dest('build/js'))
    return cb()
}