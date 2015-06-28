'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    var config = {
        app: 'app',
        dist: 'dist'
    }

    grunt.initConfig({
        config: config,

        copy: {
            dist_html: {
                files: [
                    {
                        expand: true,
                        cwd:'<%= config.app %>/',
                        src: '**/*.js',
                        dest: '<%= config.dist %>/',
                        ext: '.js',
                        extDot: 'last',
                        flatten: true,  // 去掉目录
                        rename: function (dest, src) {
                            return dest + 'js/' + src;
                        }
                    }
                ]
            }
        },

        clean: {
            dist: {
                src: ['<%= config.dist %>/**/*']
            }
        }
    });
}