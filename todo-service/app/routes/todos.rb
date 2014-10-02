class App < Sinatra::Base

  get '/todos' do
    authenticate!

    status 200
    json TodoRepository.find_by_user(current_user_id)
  end

  post '/todos' do
    authenticate!

    todo = Todo.new(params)
    todo.user_id = current_user_id

    if TodoRepository.save(todo)
      status 200
      json todo
    else
      status 400
      json error: 'Invalid params'
    end
  end

end