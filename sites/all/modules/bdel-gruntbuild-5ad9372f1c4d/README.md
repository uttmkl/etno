Grunt Build Suite
==================

A Grunt build suite for building and deploying Demandware projects.

Dependencies
-------------
* node.js must be installed
* grunt >= 0.4.0 must be installed
* git must be installed and in your path
* curl must be installed and in your path
* rm (*nix command for "remove") must be installed and in your path


Key Features
------------
* Configs and Tasks are organized in respective directories
* Task aliases are contained in a single aliases.json file
* All password are encrypted and decrypted during use
* 2-factor authentication support
* Simple curl commands used instead of http grunt plugin
* Git repos can be cloned or archived
* Email notification once build is complete
* Added ability to use comma-separated list of repos in build.properties, each with their own branch
* Added ability to use a Demandware build number and repo branch number
* Included grunt plugin time-grunt to show time elapse on tasks
* Integration with Eclipse External Tool Configuration or command-line use
* Running a build prompts for build version and branch numbers


For more information on how to use this, [checkout the Wiki](https://bitbucket.org/bdel/gruntbuild/wiki/Home)
