const { series, parallel, task } = require('gulp');

const styles = require('./gulp/tasks/styles')
const scripts = require('./gulp/tasks/script')
const clean = require('./gulp/tasks/clean')
const watch = require('./gulp/tasks/watch')
const imageMinify = require('./gulp/tasks/imageMinify')


exports.start = series(clean, parallel(styles, scripts, imageMinify), watch);
exports.build = series(clean, parallel(styles, scripts, imageMinify));
exports.clean = task(clean);
