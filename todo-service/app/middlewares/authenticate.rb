class Authenticate

  def initialize(app)
    @app = app
  end

  def call(env)
    auth_header = env['HTTP_AUTHORIZATION']

    return [401, {}, ['Missing Authorization header']] if auth_header.nil?

    with_authorization(auth_header) do |payload|
      env['payload'] = payload
      @app.call(env)
    end
  end

  private

  def with_authorization(header)
    payload = AuthToken.valid?(header)

    return [ 401, {}, ['Invalid Authorization']] unless payload

    yield payload
  end

end