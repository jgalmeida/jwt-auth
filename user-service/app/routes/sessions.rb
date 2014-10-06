class App < Sinatra::Base

  post '/register' do
    user = User.new(params)

    if UserRepository.save(user)
      current_user = { uid: user.id, layer_token: 'userservicetoken' }
      token = AuthToken.issue_token({current_user: current_user})

      status 200
      json current_user: user.id, token: token
    else
      status 400
      json error: 'Invalid params'
    end
  end

  post '/authenticate' do
    user = UserRepository.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      current_user = { uid: user.id, layer_token: 'userservicetoken' }
      token = AuthToken.issue_token({current_user: current_user})

      status 200
      json current_user: user.id, token: token
    else
      status 400
      json error: 'Invalid params'
    end
  end

end