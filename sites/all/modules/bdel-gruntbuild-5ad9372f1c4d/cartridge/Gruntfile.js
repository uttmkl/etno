module.exports = function(grunt) {
	var path = require('path');

	grunt.loadTasks('grunt/tasks');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt/config')
	});

	require('time-grunt')(grunt);
};
