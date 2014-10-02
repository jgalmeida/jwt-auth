class UserRepository

  class << self
    @@users   = []

    def find_by_id(id)
      @@users.select { |u| u.id == id }
    end

    def find_by_email(email)
      @@users.select { |u| u.email == email }
    end

    def list
      @@users
    end

    def save(user)
      user.id = @@users.size + 1

      @@users.push(user)
      true
    end

  end

end