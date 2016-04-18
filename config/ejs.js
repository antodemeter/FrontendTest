module.exports.tasks = {
  ejs: {
    develop: {
        src: ['**/*.ejs', '!partials/**/*'],
        dest: '<%= config.dir.tmp %>',
        expand: true,
        ext: '.html',
        cwd: '<%= config.dir.app %>'
    },
    production: {
        src: ['**/*.ejs', '!partials/**/*', '!layouts/**/*'],
        dest: '<%= config.dir.dist %>',
        expand: true,
        ext: '.html',
        cwd: '<%= config.dir.app %>'
    }
  }
};
