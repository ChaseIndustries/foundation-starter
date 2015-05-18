module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var theme_name = 'theme';
  var base_theme_path = '../zurb_foundation';

  var global_vars = {
    theme_name: theme_name,
    theme_css: 'css',
    theme_scss: 'sass',
    base_theme_path: base_theme_path
  };

  // array of javascript libraries to include.
  var jsLibs = [
    '<%= global_vars.base_theme_path %>/js/vendor/placeholder.js',
    '<%= global_vars.base_theme_path %>/js/vendor/fastclick.js'
  ];

  // array of foundation javascript components to include.
  var jsFoundation = [
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.abide.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.accordion.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.alert.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.clearing.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.dropdown.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.equalizer.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.interchange.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.joyride.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.magellan.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.offcanvas.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.orbit.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.reveal.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.slider.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.tab.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.tooltip.js',
    '<%= global_vars.base_theme_path %>/js/foundation/foundation.topbar.js'
  ];

  // array of custom javascript files to include.
  var jsApp = [
    'js/*.js'
  ];

  grunt.initConfig({
    global_vars: global_vars,
    pkg: grunt.file.readJSON('package.json'),
    sass: {
			dist: {
  			files :  {
    			'css/theme.css': 'sass/theme.scss'
    		},
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					sourcemap : true,
					includePaths: require('node-bourbon').includePaths
				},
			},
		},
    drush: {
      cc_theme_registry: {
        args: ['cc', 'theme-registry']
      },
      cc_css_js: {
        args: ['cc', 'css-js']
      },
      cc_all: {
        args: ['cc', 'all']
      }
    },
    grunticon: {
      icons : {
        files: [{
            expand: true,
            cwd: 'images/icons/source',
            src: ['*.svg', '*.png'],
            dest: 'css'
        }],
        options: {
          datasvgcss : 'icons.data.svg.scss',
          datapngcss : 'icons.data.png.scss',
          urlpngcss  : 'icons.fallback.scss',
          enhanceSVG : true
        }
      }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: {
        files: ['<%= global_vars.theme_scss %>/*.scss','<%= global_vars.theme_scss %>/*/*.scss'],
        tasks: ['sass', 'notify:sass'],
        options: {
          livereload: true
        }
      },
      templates: {
        files: ['**/*.tpl.php'],
        tasks: ['drush:cc_theme_registry', 'notify:drush']
      },
      info :{
        files: ['**/*.info', 'template.php'],
        tasks: ['drush:cc_all', 'notify:drush']
      },
      svg : {
        files : ['images/icons/source/*.svg'],
        tasks : ['grunticon','sass']
      }
    },
    notify : {
      sass : {
        options : {
          title : "CSS Compiled",
          message : "SASS Task Complete"
        }
      },
      drush : { 
        options : {
          title : "Cache Cleared",
          message : "Cleared the Drupal cache"
        }
      }
    }
  });
  grunt.registerTask('build', ['sass', 'notify', 'grunticon']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-grunticon');
};