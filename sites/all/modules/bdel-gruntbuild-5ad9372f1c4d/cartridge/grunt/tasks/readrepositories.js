module.exports = function(grunt) {

  grunt.registerMultiTask('readrepositories', 'create version file.', function() {
    var version = this.data.version;
    var config = this.data.repos;
    var branch = this.data.branch;
    var configLines = config.split(',');
    var dir = grunt.config('settings.local\\.build\\.dir');
    configLines.forEach(function(configLine) {
      if (configLine != "") {
        var configElems = configLine.trim().split(' ');
        var repositoryPath = configElems[0];
        var repositoryBranch = configElems.length?configElems[1]:'master';

        // if a 'branch' grunt option was provided
        if (branch.length > 0) {
          repositoryBranch = branch;
        }

        var configID = configLine.substring(configLine.lastIndexOf("/") + 1, configLine.lastIndexOf(".git"));

        var cloneParameters = {
          options : {
            repository : repositoryPath,
            branch : repositoryBranch,
            directory : dir + '/exports/' + configID,
            verbose : true
          }
        };

        var archiveParameters = {
          options: {
            format: 'zip',
            treeIsh: repositoryBranch,
            output: dir + '/exports/' + configID + '.zip',
            remote: repositoryPath,
            verbose: true
          }
        };

        var moveParameters = {
          files : [ {
            expand : true,
            src : dir + '/exports/' + configID + '/cartridges/*/**',
            dest : dir + '/output/' + version + '/',
            rename : function(dest, src) {
              // moving cartridges of several repositories into a
              // common folder
              return dest + src.substring(src.indexOf('cartridges/') + "cartridges/".length, src.length);
            }
          } ]
        };

        // This needs some work
        // if(grunt.config('settings.build\\.optimize\\.js') || grunt.config('settings.build\\.optimize\\.css')){
        // 	moveParameters.options = {
        //     	process: function (content, srcpath) {
        //     		if(srcpath.indexOf('.isml') == -1){
        //     			return content;
        //     		}
        //     		// get path to cartridge
        //     		var basePath = srcpath.split('/').splice(0,4).join('/');
        //     		// get cartridge name
        //     		var cartridgeName = srcpath.split('/')[3];
        //
        //     		// replace the tagged sections
        //     		if(grunt.config('settings.build\\.optimize\\.js')){
        // 	    		content = content.replace(/<!--- BEGIN JS files to merge(.*)--->([\s\S]*)\s*<!--- END JS files to merge.*--->/g,function(all, params, scripts, m3){
        // 	    			var relpath = params.match(/source_path=([^;)]*)/)[1];
        // 	    			var target  = params.match(/targetfile=([^;)]*)/)[1];
        // 	    			// create uglify config
        // 	    			grunt.config('uglify.' + target.split('.')[0], {
        // 	    				src: scripts.replace(/.*\('/g,basePath+'/'+relpath+'/').replace(/'\).*/g,'').split('\r\n').filter(function(e){return e.length}),
        // 	    				dest: 'output/' + version + '/'+ cartridgeName + '/'+ relpath + '/' + target
        // 	    			});
        // 	    			return '<script type="text/javascript" src="${URLUtils.absStatic(\''+target+'\'}"></script>';
        // 	    		});
        // 	    	}
        //
        //
        // 	    	if(grunt.config('settings.build\\.optimize\\.css')){
        // 	    		content = content.replace(/<!--- BEGIN CSS files to merge(.*)--->([\s\S]*)\s*<!--- END CSS files to merge.*--->/g,function(all, params, scripts, m3){
        // 	    			var relpath = params.match(/source_path=([^;)]*)/)[1];
        // 	    			var target  = params.match(/targetfile=([^;)]*)/)[1];
        //
        // 						var src = scripts.replace(/.*\('/g,basePath+'/'+relpath).replace(/'\).*/g,'').split(/\r\n|\r|\n/g).filter(function(e){return e.length});
        // 						grunt.config('destination', 'output/' + version + '/'+ cartridgeName + '/'+ relpath + '/' + target);
        //
        // 	    			// create cssmin config
        // 	    			grunt.config('cssmin.' + target.split('.')[0], {
        // 							files: {
        // 							'<%= destination %>': [src]
        // 							}
        // 	    			});
        // 	    			return '<link href="${URLUtils.staticURL(\'/'+target+'\')}" rel="stylesheet" type="text/css" />';
        // 	    		});
        // 	    	}
        //     		return content;
        //      	}
        //     };
        // }

        grunt.config('configID', configID);
        grunt.config('gitclone.' + configID, cloneParameters);
        grunt.config('gitarchive.' + configID, archiveParameters);
        grunt.config('copy.' + configID, moveParameters);

      };
    });
  });

};
