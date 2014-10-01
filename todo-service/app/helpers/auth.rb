require 'openssl'

module Sinatra
  module SessionAuth

    module Helpers

      def authenticate!
        halt 401, 'Not authenticated' unless (current_user_id)
      end

      def current_user_id
        env['payload']['user_id'].to_i
      end

    end

    def self.registered(app)
      app.helpers SessionAuth::Helpers
    end

  end

end