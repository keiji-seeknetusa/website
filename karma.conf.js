// Karma configuration
// Generated on Fri Jan 17 2014 03:00:04 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'public/',


    // frameworks to use
    frameworks: ['mocha', 'requirejs', 'chai-jquery', 'chai', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'vendor/**/*.js', included: false},
      {pattern: 'templates/**/*.html', included: false},
      {pattern: 'js/**/*.js', included: false},
      {pattern: 'test/**/*Test.js', included: false},

      'test/test-main.js',
    ],


    // list of files to exclude
    exclude: [
      'js/main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],


    preprocessors: {
      'js/**/*.js': 'coverage',
      '**/*.html': []
    },


    coverageReporter: {
      type: 'html',
      dir:  './coverage/',
      file: 'coverage.html'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

