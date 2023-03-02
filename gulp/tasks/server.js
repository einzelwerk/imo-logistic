const { path } = require('../config/path');
const { plugins } = require('../config/plugins');

exports.server = function server() {
  plugins.browsersync.init({
    server: {
      baseDir: `${path.build.markup}`,
    },
    notify: false,
    port: 3000,
  });
};
