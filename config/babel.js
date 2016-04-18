module.exports.tasks = {
  babel: {
    options: {
      sourceMap: true,
      presets: [
        'es2015'
      ]
    },
    develop: {
      files: [
        {
          expand: true,
          cwd: '<%= config.dir.app %>/scripts',
          src: '{,*/}*.js',
          dest: '<%= config.dir.tmp %>/scripts',
          ext: '.js'
        }
      ]
    },
    production: {
      files: [
        {
          expand: true,
          cwd: '<%= config.dir.app %>/scripts',
          src: 'main.js',
          dest: '<%= config.dir.dist %>/scripts',
          ext: '.js'
        }
      ]
    }
  }
};
