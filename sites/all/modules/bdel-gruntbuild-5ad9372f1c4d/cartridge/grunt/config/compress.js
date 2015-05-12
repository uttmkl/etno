module.exports = {
  code : {
    options : {
      archive : '<%= settings["local.build.dir"] %>/output/<%= grunt.config("build") %>.zip'
    },
    files : [ {
      expand: true,
      cwd: '<%= settings["local.build.dir"] %>/output/',
      src : [ '<%= grunt.config("build") %>/**' ],
      //dest : '/'
    }, ]
  }
}
