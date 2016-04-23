module.exports.tasks = {
  ejs: {
    develop: {
    	  cwd: '<%= config.dir.app %>',
        src: ['**/*.ejs', '!partials/**/*', '!layouts/**/*'],
        dest: '<%= config.dir.tmp %>',
        expand: true,
        ext: '.html'
    },
    production: {
    	  cwd: '<%= config.dir.app %>',
        src: ['**/index.ejs'],
        dest: '<%= config.dir.dist %>',
        expand: true,
        ext: '.html'
    }
  }
};
