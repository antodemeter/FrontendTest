'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var options = {
    config: {
      dir: {
        app: 'app',
        dist: 'dist',
        tmp: '.tmp'
      },
      ports: {
        livereload: 9000
      }
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);

  // livereload
  grunt.registerTask('serve', 'Start the server and preview website', function (target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:develop',
      'requirejs:develop',
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:production',
    'requirejs:production',
    'cssmin'
  ]);
};
