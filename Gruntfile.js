module.exports = function (grunt) {

  grunt.initConfig({
    eslint: {
      nodeFiles: {
        src: ['Gruntfile.js'],
        options: {
          configFile: 'eslint-node.yml'
        }
      },
      browserFiles: {
        src: ['app/**/*.js'],
        options: {
          configFile: 'eslint-browser.yml'
        }
      },
    },
    uglify: {
      dist: {
        src: ['build/app.js', 'build/**/*.js'],
        dest: 'dist/app.min.js'
      }
    },
    cssmin: {
      dist: {
        src: ['app/**/*.css'],
        dest: 'dist/app.min.css'
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: '.',
        src: [
          'app/**/*',
          '!app/**/*.js', '!app/**/*.css', '!app/index.html',
          'lib/**/*'
        ],
        dest: 'dist'
      }
    },
    watch: {
      dev: {
        files: [
          'app/**/*.js', 'app/**/*.css', 'app/index.html'
        ],
        tasks: ['eslint', 'htmlbuild:dev']
      }
    },
    connect: {
      dev: {
        options: {
          port: 8888,
          protocol: 'http',
          open: 'http://localhost:8888/'
        }
      },
      build: {
        options: {
          port: 8888,
          protocol: 'http',
          open: 'http://localhost:8888/',
          keepalive: true
        }
      },
      dist: {
        options: {
          base: 'dist',
          port: 8888,
          protocol: 'http',
          open: 'http://localhost:8888/',
          keepalive: true
        }
      }
    },
    htmlbuild: {
      dev: {
        src: 'app/index.html',
        dest: 'index.html',
        options: {
          prefix: '',
          scripts: {
            scripts: ['app/app.js', 'app/**/*.js']
          },
          styles: {
            styles: 'app/**/*.css'
          }
        }
      },
      dist: {
        src: 'app/index.html',
        dest: 'dist/index.html',
        options: {
          prefix: '',
          scripts: {
            scripts: 'dist/app.min.js'
          },
          styles: {
            styles: 'dist/app.min.css'
          }
        }
      }
    },
    clean: {
      all: {
        src: ['dist', 'build']
      }
    },
    ngAnnotate: {
      dist: {
        expand: true,
        cwd: 'app',
        src: './**/*.js',
        dest: 'build'
      }
    }
  });

  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', [
    'eslint', 'htmlbuild:dev', 'connect:dev', 'watch'
  ]);

  grunt.registerTask('build', [
    'eslint', 'htmlbuild:dev', 'connect:build'
  ]);

  grunt.registerTask('dist', [
    'clean', 'ngAnnotate', 'uglify', 'cssmin', 'copy', 'htmlbuild:dist'
  ]);
};
