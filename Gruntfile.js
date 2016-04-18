'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var options = {
    config: {
      dir: {
        app:         'app',
        dist:        'dist',
        tmp:         '.tmp'
      },
      ports: {
        livereload:  9000
      }
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);

  // livereload
  grunt.registerTask('serve', 'Starting server and preview project', function (target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'requirejs:develop',
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'ejs:production',
    'concurrent:dist',
    'requirejs:production',
    'cssmin',
    'filerev'
  ]);
};
