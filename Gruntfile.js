module.exports = function(grunt) {
	grunt.initConfig({
        sasslint: {
            options: {
                configFile: '.sass-lint.yml',
                formatter: 'stylish'
            },
            target: ['src/*.scss']
        },
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'dist/style.css': 'src/style.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: ['src/*.scss'],
				tasks: ['style'],
			},
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-sass-lint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('style', ['sass']);
	grunt.registerTask('default', ['sass']);
};
