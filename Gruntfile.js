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

        uglify: {
            options: {

            },
            dist: {
                files: {
                    'assets/build/main.min.js': ['assets/build/jquery.min.js', 'assets/js/*.js', 'main.js']
                }
            }
        },

        clean: {
            scss: ['assets/build/style.css', 'assets/build/style.min.css'],
            js: ['assets/build/main.min.js']
        },


        watch: {
            css: {
                files: ['*.scss', 'assets/scss/*.scss'],
                tasks: ['compile-scss'],
                options: {
                    spawn: false
                }
            },

            javascript: {
                files: ['Gruntfile.js', 'main.js', 'assets/js/*.js'],
                tasks: ['compile-js'],
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('compile-scss', ['scsslint', 'clean:scss', 'sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('compile-js', 'jshint', 'clean:js', 'uglify');
    grunt.registerTask('default', ['compile-scss', 'compile-js']);
};