/*
 * grunt-buildconcat
 * https://github.com/carlosrodriguez/grunt-buildconcat
 *
 * Copyright (c) 2012 Carlos Rodriguez
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('buildconcat', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('buildconcat'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('buildconcat', function() {
    return 'buildconcat!!!';
  });

};
