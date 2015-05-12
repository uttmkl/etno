module.exports = {
  code: {
    src: '<%= settings["local.build.dir"] %>/exports/<%= grunt.config("configID") %>.zip',
    dest: '<%= settings["local.build.dir"] %>/exports/<%= grunt.config("configID") %>'
  }
}
