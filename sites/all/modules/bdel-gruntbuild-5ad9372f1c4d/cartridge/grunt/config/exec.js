module.exports = {
  remove_archive_zip: {
    command: 'rm <%= settings["local.build.dir"] %>/exports/<%= grunt.config("configID") %>.zip'
  },
  upload: {
    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> -T <%= settings["local.build.dir"] %>/output/<%= grunt.config("build") %>.zip https://<%= instance["webdav.server"] %><%= instance["webdav.cartridge.root"] %>'
  },
  upload_2factor: {
    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> --cert <%= instance["webdav.p12.path"] %>:<%= instance["webdav.p12.password"] %> -T <%= settings["local.build.dir"] %>/output/<%= grunt.config("build") %>.zip https://<%= instance["webdav.server"] %><%= instance["webdav.cartridge.root"] %>'
  },
  unzip: {
    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> -d method=UNZIP https://<%= instance["webdav.server"] %><%= instance["webdav.cartridge.root"] %><%= grunt.config("build") %>.zip'
  },
  unzip_2factor: {
	    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> --cert <%= instance["webdav.p12.path"] %>:<%= instance["webdav.p12.password"] %> -d method=UNZIP https://<%= instance["webdav.server"] %><%= instance["webdav.cartridge.root"] %><%= grunt.config("build") %>.zip'
	  },
  remove_remote_zip: {
    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k --request DELETE -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> https://<%= instance["webdav.server"] %><%= instance["webdav.cartridge.root"] %><%= grunt.config("build") %>.zip'
  },
  remove_remote_zip_2factor: {
	    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k --request DELETE -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> --cert <%= instance["webdav.p12.path"] %>:<%= instance["webdav.p12.password"] %> https://<%= instance["webdav.server"] %><%= instance["webdav.cartridge.root"] %><%= grunt.config("build") %>.zip'
	  },
  login: {
    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> -c <%= settings["local.build.dir"] %>/dw_cookie.txt -d "LoginForm_Login=<%= instance[\"webdav.username\"] %>&LoginForm_Password=<%= instance[\"webdav.password\"] %>&LoginForm_RegistrationDomain=Sites" https://<%= instance["webdav.server"] %>/on/demandware.store/Sites-Site/default/ViewApplication-ProcessLogin'
  },
  login_2factor: {
	command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -u <%= instance["webdav.username"] %>:<%= instance["webdav.password"] %> -c <%= settings["local.build.dir"] %>/dw_cookie.txt -d "LoginForm_Login=<%= instance[\"webdav.username\"] %>&LoginForm_Password=<%= instance[\"webdav.password\"] %>&LoginForm_RegistrationDomain=Sites" --cert <%= instance["webdav.p12.path"] %>:<%= instance["webdav.p12.password"] %> https://<%= instance["webdav.server"] %>/on/demandware.store/Sites-Site/default/ViewApplication-ProcessLogin'
  },
  activate_build: {
    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -d "CodeVersionID=<%= grunt.config(\"build\") %>" -b <%= settings["local.build.dir"] %>/dw_cookie.txt https://<%= instance["webdav.server"] %>/on/demandware.store/Sites-Site/default/ViewCodeDeployment-Activate'
  },
  activate_build_2factor: {
	    command: '<%= settings["local.curl.path"] %>/curl --silent --show-error -k -d "CodeVersionID=<%= grunt.config(\"build\") %>" -b <%= settings["local.build.dir"] %>/dw_cookie.txt --cert <%= instance["webdav.p12.path"] %>:<%= instance["webdav.p12.password"] %> https://<%= instance["webdav.server"] %>/on/demandware.store/Sites-Site/default/ViewCodeDeployment-Activate'
	  },
  remove_cookie: {
    command: 'rm <%= settings["local.build.dir"] %>/dw_cookie.txt'
  }
}
