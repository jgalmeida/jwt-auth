class UserRepository

  class << self
    @@users   = []

    def find_by_id(id)
      @@users.find { |u| u.id == id }
    end

    def find_by_email(email)
      @@users.find { |u| u.email == email }
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