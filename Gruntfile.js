module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

    // Task configuration
    less: {
        development: {
            options: {
              compress: false,  //minifying the result
            },
            files: {
              //compiling frontend.less into main.css
              "./public/assets/stylesheets/main.css":"./src/assets/stylesheets/frontend.less"
            }
        }
    },
    copy: {

        files: {
          expand: true,
          flatten: true,
          cwd: './bower_components/',
          src: ['jquery/dist/jquery.min.js', 'bootstrap/dist/js/bootstrap.min.js',],
          dest: './public/assets/javascript/'
          //'./bower_components/jquery/dist/bootstrap.min.js': './public/assets/javascript/jquery.min.js',
          //'./bower_components/bootstrap/dist/js/bootstrap.min.js': './public/assets/javascript/bootstrap.min.js'
        }

    },
    copy: {

        files: {
          expand: true,
          flatten: true,
          cwd: './bower_components/',
          src: ['jquery/dist/jquery.min.js', 'bootstrap/dist/js/bootstrap.min.js',],
          dest: './public/assets/javascript/'
          //'./bower_components/jquery/dist/bootstrap.min.js': './public/assets/javascript/jquery.min.js',
          //'./bower_components/bootstrap/dist/js/bootstrap.min.js': './public/assets/javascript/bootstrap.min.js'
        }

    },
    cssmin: {
      target: {
        files: {
          './public/assets/stylesheets/main.css': ['./public/assets/stylesheets/main.css']
        }
      }
    },
    watch: {
        less: {
          files: ['./src/assets/stylesheets/*.less'],  //watched files
          tasks: ['less'],                          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Task definition
  grunt.registerTask('default', ['watch']);

};