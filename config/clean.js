module.exports.tasks = {
  clean: {
    dist: {
      files: [
        {
          dot: true,
          src: [
            '<%= config.dir.tmp %>',
            '<%= config.dir.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }
      ]
    },
    server: '<%= config.dir.tmp %>'
  }
};
