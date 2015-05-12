module.exports = {
  all: {
      files: [{
      expand: true,
      cwd: '<%= settings["local.build.dir"] %>/exports/',
      src: '**/cartridge/static/**/*.css',
      ext: '.css',
      dest: '<%= settings["local.build.dir"] %>/output/<%= grunt.config("build") %>/',
      flatten: false,
      rename: function(dest, src) {
          var path = require('path');

          // Remove the first 2 folders from src and place into dest
          // Will cause files to overwrite each other if named the same
          var wobase = src.split('/').slice(2).join('/');
          return path.join(dest, wobase);
      }
      }]
    }
    /* Additional targets created in readrepositories */
  }
