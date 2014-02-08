module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
		        report: 'min',
		        sourceMap: 'lib/q-cluster.map.js',
		        sourceMapPrefix: 1,
		        sourceMappingURL: 'q-cluster.map.js'
		     },
		    build: {
		        src: [
                    'src/clustering.js', 'src/point-clusterer.js', 'src/make-donuts.js', 'src/utils.js'
		        ],
		        dest: 'lib/q-cluster.min.js'
		    }
		},
        
        concat: {

            dist: {
              src: ['src/clustering.js', 'src/point-clusterer.js', 'src/make-donuts.js', 'src/utils.js'],
              dest: 'lib/q-cluster.js',
            }
        },
        copy: {
          main: {
            files: [
              // includes files within path
              {expand: true, flatten: true,src: ['lib/**'], dest: 'demo/js/q-cluster/', filter: 'isFile'}
            ]
          }
        }
		
    });

    
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'concat', 'copy']);
	
	
};


