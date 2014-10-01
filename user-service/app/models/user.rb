class User
  attr_accessor :id, :email, :password

  def initialize(attributes)
    @email    = attributes[:email]
    @password = attributes[:password]
  end

  def authenticate(password)
    password == @password
  end
end