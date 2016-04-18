module.exports.tasks = {
  filerev: {
    dist: {
      src: [
        '<%= config.dir.dist %>/scripts/main.js',
        '<%= config.dir.dist %>/styles/{,*/}*.css'
      ]
    }
  }
};
