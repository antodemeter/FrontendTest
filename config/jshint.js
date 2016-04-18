module.exports.tasks = {
  jshint: {
    options: {
      jshintrc: '.jshintrc'
    },
    all: [
      'Gruntfile.js',
      '<%= config.dir.app %>/scripts/{,*/}*.js'
    ]
  }
};
