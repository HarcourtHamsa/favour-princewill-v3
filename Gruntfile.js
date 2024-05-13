module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-reload');


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    run: {
      build_webpack: {
        cmd: 'npm',
        args: [
          'run',
          'dev',
        ]
      }
    },
    reload: {
      port: 5500,
      proxy: {
        host: 'localhost'
      }
    },
    watch: {
      files: ["./src/*"],
      tasks: 'default reload'
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    build_webpack: {
      cmd: 'npm',
      args: [
        'run',
        'dev',
      ]
    }
  });

  grunt.registerTask('default', ['run:build_webpack']);
}