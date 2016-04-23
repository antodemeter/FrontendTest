module.exports.tasks = {
  clean: {
    dist: {
      files: [
        {
          dot: true,
          src: '<%= config.dir.dist %>/*'
        }
      ]
    },
    server: '<%= config.dir.tmp %>'
  }
};
