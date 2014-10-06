/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    js: {
      app: [
        'app/js/app.js',
        'app/js/modules/services.js',
        'app/js/modules/controllers.js',
        'app/js/modules/interceptors.js',
        'app/js/services/brand_service.js',
        'app/js/services/todo_service.js',
        'app/js/services/auth_service.js',
        'app/js/interceptors/auth_interceptor.js',
        'app/js/controllers/application_controller.js',
        'app/js/controllers/login_controller.js',
        'app/js/controllers/register_controller.js',
        'app/js/controllers/todos_controller.js',
        'app/js/controllers/brands_controller.js'
      ],
      vendor: [
        'vendor/js/jquery-2.1.1.js',
        'vendor/js/underscore.js',
        'vendor/js/angular.js',
        'vendor/js/angular-route.js',
        'vendor/js/angular-resource.js',
        'vendor/js/bootstrap.js'
      ]
    },
    css: {
      app: [
        'app/css/**/*.css'
      ],
      vendor: [
        'vendor/css/**/*.css'
      ]
    }

  };
};
