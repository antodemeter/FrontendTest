module.exports.tasks = {
  watch: {
    bower: {
      files: [
        'bower.json'
      ]
    },
    requirejs: {
      files: [
        '<%= config.dir.app %>/scripts/*'
      ],
      tasks: [
        'requirejs:develop'
      ],
      options: {
        livereload: true
      }
    },
    jshint: {
      files: [
        'Gruntfile.js',
        '<%= config.dir.app %>/scripts/{,*/}*.js'
      ],
      tasks: [
        'jshint'
      ]
    },
    babel: {
      files: [
        '<%= config.dir.app %>/scripts/{,*/}*.js'
      ],
      tasks: [
        'babel:develop'
      ]
    },
    gruntfile: {
      files: [
        'Gruntfile.js'
      ]
    },
    less: {
      files: [
        '<%= config.dir.app %>/styles/{,*/}*.{less,css}'
      ],
      tasks: [
        'less:develop'
      ]
    },
    ejs: {
      files: [
        '**/*.ejs', '!partials/**/*', '!layouts/**/*'
      ],
      tasks: [
        'ejs:develop'
      ]
    }
  }
};
