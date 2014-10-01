class App < Sinatra::Base
  helpers  Sinatra::JSON

  use Rack::Parser, :parsers => {
    'application/json' => Proc.new { |body| ::MultiJson.decode body }
  }

  set :root,          File.dirname(__FILE__)
  set :public_folder, Proc.new { File.join(root, 'public') }
end