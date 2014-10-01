class TodoRepository

  class << self
    @@todos   = []

    def find_by_id(id)
      @@todos.find { |t| t.id == id }
    end

    def find_by_user(user)
      @@todos.find { |t| t.user == user }
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