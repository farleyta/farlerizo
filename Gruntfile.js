module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          force: true,
          outputStyle: 'compressed',
          httpPath: '/farlerizo/',        
          imagesDir: 'img',
          sassPath: 'scss',
          cssPath: 'css',
          importPath: 'bower_components/foundation/scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['compass']
      },

      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'css/*.css',
          'js/app.js',
          '*.html'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['compass']);
  grunt.registerTask('default', ['build','watch']);
}