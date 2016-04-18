module.exports.tasks = {
  less: {
    options: {
      sourcemap: 'inline'
    },
    develop: {
      files: [
        {
          expand: true,
          cwd: '<%= config.dir.app %>/styles',
          src: ['*.{less,css}'],
          dest: '<%= config.dir.tmp %>/styles',
          ext: '.css',
          compress: 'false'
        }
      ]
    },
    production: {
      files: [
        {
          expand: true,
          cwd: '<%= config.dir.app %>/styles',
          src: ['*.{less,css}'],
          dest: '<%= config.dir.dist %>/styles',
          ext: '.css',
          compress: 'true'
        }
      ]
    }
  }
};
