module.exports = function(grunt) {

	grunt.initConfig({

		sass: {
			dist: {
				files: {
					'../webroot/css/style.min.css': '../webroot/css/sass/style.scss'
				},
				options: {
					style: 'compressed'
				}
			}
		},

		uglify: {
			my_target: {
				files: {
					'../webroot/js/min/script.min.js': ['../webroot/js/*.js']
				}
			}
		},
		
		watch: {
			css: {
				files: "../webroot/css/sass/*.scss",
				tasks: ["sass"]
			},
			js: {
				files: "../webroot/js/**",
				tasks: ["uglify"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['watch']);
};