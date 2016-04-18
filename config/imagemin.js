module.exports.tasks = {
  imagemin: {
    dist: {
      files: [
        {
          expand: true,
          cwd: '<%= config.dir.app %>/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dir.app %>/images'
        },
        {
          expand: true,
          cwd: '<%= config.dir.app %>',
          src: '*.{ico,png}',
          dest: '<%= config.dir.dist %>'
        }
      ]
    }
  }
};
