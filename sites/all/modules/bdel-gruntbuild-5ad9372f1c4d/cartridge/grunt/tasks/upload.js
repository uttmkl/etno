module.exports = function(grunt) {

  grunt.registerTask('upload', 'Upload zip cartridge', function(){
    if(grunt.config('settings.twofactor\\.enabled')){
      grunt.task.run('exec:upload_2factor');
      grunt.task.run('exec:unzip_2factor');
      grunt.task.run('exec:remove_remote_zip_2factor');
    } else {
      grunt.task.run('exec:upload');
      grunt.task.run('exec:unzip');
      grunt.task.run('exec:remove_remote_zip');
    }
  });

};
