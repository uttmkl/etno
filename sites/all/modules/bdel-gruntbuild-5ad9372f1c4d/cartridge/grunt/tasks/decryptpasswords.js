var os = require('os');
var crypto = require('crypto');
var ENCRYPTION_MARKER = 'cD6UX6YatgAE4wBEQfoTptKwhFunsP_';

module.exports = function(grunt) {

  grunt.registerTask('decryptpasswords', 'Decrypt the passwords.', function() {
    if (!grunt.config('settings.password\\.encryption')) {
      return;
    }

    // instance password
    var password = grunt.config('instance.webdav\\.password');
    var dependencyFilename = 'config/environment.'+grunt.config('settings.build\\.target\\.environment')+'.properties';

    // 2-factor auth key password
    var twoFactorPassword = grunt.config('instance.webdav\\.p12\\.password');

    // email password
    var emailPassword = grunt.config('settings.build\\.mail\\.password');

    // instance password
    if (password.indexOf(ENCRYPTION_MARKER) == 0) {
      // decrypt and update setting
      var decipher = crypto.createDecipher('aes256','thisisatopsecretpasscode');
      password = password.substring(ENCRYPTION_MARKER.length);
      var decrypted = decipher.update(password, 'base64', 'utf8');
      decrypted = decrypted + decipher.final();
      grunt.config('instance.webdav\\.password',decrypted);
    } else {
      var cipher = crypto.createCipher('aes256','thisisatopsecretpasscode');
      var fileContent = grunt.file.read(dependencyFilename);
      var encrypted = cipher.update(password, 'utf8', 'base64');
      encrypted = encrypted + cipher.final('base64');
      grunt.file.write(dependencyFilename,fileContent.replace(password, ENCRYPTION_MARKER+encrypted));
      grunt.log.writeln('Instance password has been encrypted for security reasons.');
    }

    // 2-factor password
    if (twoFactorPassword) {
      if (twoFactorPassword.indexOf(ENCRYPTION_MARKER) == 0) {
        // decrypt and update setting
        var decipher = crypto.createDecipher('aes256','thisisatopsecretpasscode');
        twoFactorPassword = twoFactorPassword.substring(ENCRYPTION_MARKER.length);
        var twoFactorDecrypted = decipher.update(twoFactorPassword, 'base64', 'utf8');
        twoFactorDecrypted = twoFactorDecrypted + decipher.final();
        grunt.config('instance.webdav\\.p12\\.password',twoFactorDecrypted);
      } else {
        var cipher = crypto.createCipher('aes256','thisisatopsecretpasscode');
        var fileContent = grunt.file.read(dependencyFilename);
        var twoFactorEncrypted = cipher.update(twoFactorPassword, 'utf8', 'base64');
        twoFactorEncrypted = twoFactorEncrypted + cipher.final('base64');
        grunt.file.write(dependencyFilename,fileContent.replace(twoFactorPassword, ENCRYPTION_MARKER+twoFactorEncrypted));
        grunt.log.writeln('2-factor password has been encrypted for security reasons.');
      }
    }

    // email password
    if (emailPassword) {
      if (emailPassword.indexOf(ENCRYPTION_MARKER) == 0) {
        // decrypt and update setting
        var decipher = crypto.createDecipher('aes256','thisisatopsecretpasscode');
        emailPassword = emailPassword.substring(ENCRYPTION_MARKER.length);
        var emailDecrypted = decipher.update(emailPassword, 'base64', 'utf8');
        emailDecrypted = emailDecrypted + decipher.final();
        grunt.config('settings.build\\.mail\\.password',emailDecrypted);
      } else {
        var cipher = crypto.createCipher('aes256','thisisatopsecretpasscode');
        var emailFileContent = grunt.file.read('config/build.properties');
        var emailEncrypted = cipher.update(emailPassword, 'utf8', 'base64');
        emailEncrypted = emailEncrypted + cipher.final('base64');
        grunt.file.write('config/build.properties',emailFileContent.replace(emailPassword, ENCRYPTION_MARKER+emailEncrypted));
        grunt.log.writeln('Email password has been encrypted for security reasons.');
      }
    }

  });

};
