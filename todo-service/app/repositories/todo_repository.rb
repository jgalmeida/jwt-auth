class TodoRepository

  class << self
    @@todos   = []

    def list_by_user(user)
      @@todos.select { |t| t.user_id == user }
    end

    def list
      @@todos
    end

    def save(todo)
      todo.id = @@todos.size + 1

      @@todos.push(todo)
      true
    end

  end

end