module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'assets/build/style.css': 'style.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    'assets/build/style.css': 'assets/build/style.css'
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'main.js']
        },

        cssmin: {
            dist: {
                files: {
                    'assets/build/style.min.css': 'assets/build/style.css'
                }
            }
        },


        watch: {
            css: {
                files: ['*.scss', 'assets/scss/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
                options: {
                    spawn: false
                }
            },

            javascript: {
                files: ['Gruntfile.js', 'main.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('compile-scss', ['sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('default', ['compile-scss', 'jshint']);
};