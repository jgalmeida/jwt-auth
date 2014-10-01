$:.unshift File.expand_path(File.dirname(__FILE__))

require 'bundler'

# require gemfile
Bundler.require(:default)

require 'app/modules/auth_token'
require 'app/models/user'
require 'app/repositories/user_repository'
require 'app/routes/sessions'
require 'app'

use Rack::Cors do
  allow do
    origins 'http://frontend.com:8000'
    resource '/*', :headers => :any, :methods => :post
  end
end

run App