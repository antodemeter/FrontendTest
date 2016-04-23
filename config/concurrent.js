module.exports.tasks = {
  concurrent: {
    develop: [
      'jshint',
      'babel:develop',
      'less:develop',
      'ejs:develop'
    ],
    production: [
      'jshint',
      'babel:production',
      'less:production',
      'ejs:production',
      'imagemin'
    ]
  }
};
