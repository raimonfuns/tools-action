module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                eqeqeq: true, // 严格相等运算符取代相等运算符
                trailing: true // 行尾不得有多余的空格
            },
            files: ['Gruntfile.js', 'lib/**/*.js']
        },
        concat: {
            js: {
                src: ['lib/module1.js', 'lib/module2.js', 'lib/plugin.js'],
                dest: 'dist/script.js'
            },
            css: {
                src: ['style/normalize.css', 'style/base.css', 'style/theme.css'],
                dest: 'dist/screen.css'
            }
        },
        uglify: {
            // options: {
            //     banner: bannerContent,
            //     sourceMapRoot: '../',
            //     sourceMap: 'distrib/' + name + '.min.js.map',
            //     sourceMapUrl: name + '.min.js.map'
            // },
            target : {
                expand: true,
                cwd: 'dist',
                src : '*.js',
                dest : 'js/'
            }
        },
        watch: {
            scripts: {
                files: '**/*.js',
                tasks: 'jshint',
                options: {
                    livereload: true,
                }
            },
            css: {
                files: '**/*.scss',
                tasks: 'sass',
                options: {
                    livereload: true,
                }
            },
        },
        sass: {
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style/master.css': 'style/sass/master.scss'
                }
            }
        }
    });

    grunt.registerTask('default', 'concat');
};