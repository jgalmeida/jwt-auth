class App < Sinatra::Base

  get '/todos/' do
    authenticate!

    json TodoRepository.list, status: 200
  end

  post '/todos' do
    authenticate!

    json TodoRepository.list, status: 200
  end

end