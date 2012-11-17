module.exports = function(grunt) {
  
  function createBanner(  ) {

    return '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* <%= pkg.description %>\n' +
            '*/';
  }

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    meta: {
      banner: createBanner() 
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        strict: false
      },
      globals: {}
    },
    buildconcat: {
      css: {
        src: "example/stylesheets.shtml",
        dest: "build/css/all.css",
        prepend: "<banner:meta.banner>",
        cleanBanner: true
      },
      js: {
        src: "example/scripts.shtml",
        dest: "build/js/all.js",
        prepend: "<banner:meta.banner>",
        cleanBanner: true
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', 'lint buildconcat test');

};
