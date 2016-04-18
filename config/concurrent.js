module.exports.tasks = {
  concurrent: {
    server: [
      'jshint',
      'babel:develop',
      'less:develop',
      'ejs:develop'
    ],
    dist: [
      'jshint',
      'babel:production',
      'less:production',
      'ejs:production',
      'imagemin'
    ]
  }
};
