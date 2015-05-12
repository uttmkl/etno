module.exports = {
  build_complete: {
    options: {
      transport: {
        type: 'SMTP',
        options: {
          service: 'Gmail',
          auth: {
            user: '<%= settings["build.mail.username"] %>',
            pass: '<%= settings["build.mail.password"] %>',
          }
        }
      },
      message: {
        subject: 'New build on <%= settings["build.target.environment"] %>',
        text: 'Build v<%= grunt.config("build") %> is now up on <%= settings["build.target.environment"] %>',
        to: '<%= settings["build.mail.tolist"] %>',
        from: '<%= settings["build.mail.from"] %>'
      },
    }
  }
}
