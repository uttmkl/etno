module.exports = function(grunt) {
	
  grunt.registerTask('activate', 'Activate new build', function(){
    if(grunt.config('settings.twofactor\\.enabled')){
	      grunt.task.run('exec:login_2factor');
	      grunt.task.run('exec:activate_build_2factor');
	      grunt.task.run('exec:remove_cookie');
    } else {
      grunt.task.run('exec:login');
      grunt.task.run('exec:activate_build');
      grunt.task.run('exec:remove_cookie');
    }
  });
}