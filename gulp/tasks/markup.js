const { src, dest } = require('gulp');
const pug = require('gulp-pug');
// const inject = require('gulp-inject');
const { path } = require('../config/path');
const { plugins } = require('../config/plugins');
const { isDev } = require('../config/mode');

exports.markup = function markup() {
  // const sources = src('./dist/assets/styles/*.css', { read: false });

  return (
    src(path.src.markup)
      .pipe(pug({ pretty: isDev }))
      .pipe(plugins.replace(/@\//g, './assets/'))
      // .pipe(inject(sources))
      .pipe(dest(path.build.markup))
      .pipe(plugins.browsersync.stream())
  );
};
