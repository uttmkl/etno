module.exports = function(grunt) {

  grunt.registerTask('checkoutcode', 'Git clone or git archive', function() {
    if(grunt.config('settings.git\\.archive\\.enabled')){
      var configID = grunt.config('configID');
      var dir = grunt.config('settings.local\\.build\\.dir');
      // git archive does not automatically create a directory after cleaning
      if (!grunt.file.exists(dir + '/exports/' + configID)) {
        console.log('Creating exports/' + configID);
        grunt.file.mkdir(dir + '/exports/' + configID);
      }
      grunt.task.run('gitarchive');
      grunt.task.run('unzip:code');
      grunt.task.run('exec:remove_archive_zip');
    } else {
      grunt.task.run('gitclone');
    }
  });

};
