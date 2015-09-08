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

        scsslint: {
            dist: {
                src: ['style.scss', 'assets/scss/*.scss']
            },
            options: {
                colorizeOutput: true
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
            all: ['Gruntfile.js', 'main.js', 'assets/js/*.js']
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
                tasks: ['scsslint', 'sass', 'autoprefixer', 'cssmin'],
                options: {
                    spawn: false
                }
            },

            javascript: {
                files: ['Gruntfile.js', 'main.js', 'assets/js/*.js'],
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
    grunt.loadNpmTasks('grunt-scss-lint');


    grunt.registerTask('compile-scss', ['scsslint', 'sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('default', ['compile-scss', 'jshint']);
};