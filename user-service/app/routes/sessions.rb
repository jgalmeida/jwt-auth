class App < Sinatra::Base

  post '/register' do
    user = User.new(params)

    if UserRepository.save(user)
      token = AuthToken.issue_token({current_user: user.id})

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
      token = AuthToken.issue_token({current_user: user.id})

      status 200
      json current_user: user.id, token: token
    else
      status 400
      json error: 'Invalid params'
    end
  end

end