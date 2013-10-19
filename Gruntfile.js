module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['assets/js/src/*.js'],
        tasks: ['jshint:all']
      },
      css: {
        files: ['assets/css/scss/*.scss'],
        tasks: ['compass']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'assets/js/src/main.js'
      ]
    },
    compass: {
      options: {
        sassDir: 'assets/css/scss',
        cssDir: 'assets/css',
        generatedImagesDir: '/assets/images',
        imagesDir: 'assets/images',
        javascriptsDir: 'assets/js',
        fontsDir: 'assets/fonts',
        httpImagesPath: '/assets/images',
        httpGeneratedImagesPath: '/assets/images',
        httpFontsPath: '/assets/fonts',
        relativeAssets: false,
        require: 'compass-normalize'
      },
      all: [
        'assets/css/scss'
      ]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/js/src/main.js',
        dest: 'assets/js/main.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['jshint', 'compass', 'uglify']);

};