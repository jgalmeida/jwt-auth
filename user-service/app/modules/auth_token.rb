module AuthToken

  APP_SECRET = 'linkedcaresecret'

  def self.issue_token(payload)
    JWT.encode(payload, APP_SECRET)
  end

  def self.valid?(token)
    begin
      JWT.decode(token, APP_SECRET)
    rescue
      false
    end
  end

end