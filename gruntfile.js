module.exports = function(grunt) {

  // Configure Grunt
  grunt.initConfig({

    sass: {
      options: {
        includePaths: require('node-bourbon').includePaths
      },
      dist: {
        files: {
          'css/site.css': 'scss/site.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: 'sass'
      }
    }

  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['sass', 'watch']);

}