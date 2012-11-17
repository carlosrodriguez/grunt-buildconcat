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

  grunt.registerMultiTask('buildconcat', 'Build a concatenation string from includes on an external file.', function() {

    var src = grunt.helper('buildconcat', this.data);

    if (this.errorCount) { 
      return false; 
    } else {
      grunt.file.write(this.file.dest, src);
      grunt.log.writeln("Created the " + this.data.dest + " file");
      return true;
    }

  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('buildconcat', function(config) {
    var fs = require('fs'),
        sourceFile = fs.readFileSync(config.src, 'ascii'),
        list = sourceFile.match(/(href|src)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, ""),
        files = list.join(',').replace(/(src=|href=)?\"\/|(src=|href=)?\"/g,"").split(","),
        concatFiles = grunt.file.expandFiles(files),
        src = grunt.helper('concat', concatFiles);

    grunt.log.writeln("Concatenating files from list: " + files);

    return src;

  });

};
