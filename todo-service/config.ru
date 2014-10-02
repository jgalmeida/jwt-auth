$:.unshift File.expand_path(File.dirname(__FILE__))

require 'bundler'

# require gemfile
Bundler.require(:default)

require 'app/modules/auth_token'
require 'app/helpers/auth'
require 'app/models/todo'
require 'app/repositories/todo_repository'
require 'app/middlewares/authenticate'
require 'app/routes/todos'
require 'app'

use Rack::Cors do
  allow do
    origins 'http://localhost:8000'
    resource '/*', :headers => :any, :methods => [:get, :post]
  end
end

use Authenticate
run App