module.exports.tasks = {
  requirejs: {
    options: {
      baseUrl: '<%= config.dir.app %>/scripts/',
      mainConfigFile: '<%= config.dir.app %>/scripts/config.js',
      modules: [
        {
          name: 'main',
          include: [
            'main'
          ]
        }
      ],
      removeCombined: false,
      findNestedDependencies: true
    },
    develop: {
      options: {
        optimize: 'none',
        dir: '<%= config.dir.tmp %>/scripts'
      }
    },
    production: {
      options: {
        optimize: 'uglify',
        dir: '<%= config.dir.dist %>/scripts'
      }
    }
  }
};
