module.exports.tasks = {
  browserSync: {
    options: {
      notify: false,
      background: true,
      watchOptions: {
        ignored: ''
      }
    },
    livereload: {
      options: {
        files: [
          '<%= config.dir.tmp %>/{,*/}*.html',
          '<%= config.dir.tmp %>/styles/{,*/}*.css',
          '<%= config.dir.app %>/images/{,*/}*',
          '<%= config.dir.tmp %>/scripts/{,*/}*.js'
        ],
        port: '<%= config.ports.livereload %>',
        server: {
          baseDir: [
            '<%= config.dir.tmp %>',
            '<%= config.dir.app %>'
          ],
          routes: {
            '/bower_components': './bower_components'
          }
        }
      }
    },
    dist: {
      options: {
        background: false,
        server: '<%= config.dir.dist %>'
      }
    }
  }
};
