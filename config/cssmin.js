module.exports.tasks = {
  cssmin: {
    dist: {
      files: {
        '<%= config.dir.dist %>/styles/main.css': [
          '<%= config.dir.tmp %>/styles/{,*/}*.css',
          '<%= config.dir.app %>/styles/{,*/}*.css'
        ]
      }
    }
  }
};
