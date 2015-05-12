module.exports = {
  settings : {
    project : '<%= settings["build.project.name"] %>',
    version : '<%= grunt.config("build") %>',
    repos : '<%= settings["build.repo.paths"] %>',
    branch : '<%= grunt.config("branch") %>'
  }
}
