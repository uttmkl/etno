module.exports = function(grunt) {

  grunt.registerTask('buildoptions', 'set build version and repo branch', function() {
    var build = grunt.option("build");
    var branch = grunt.option("branch") || '';

    grunt.config('build', build);
    grunt.config('branch', branch);
  });

};
