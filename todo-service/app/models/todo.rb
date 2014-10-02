class Todo
  attr_accessor :id, :user_id, :description

  def initialize(attributes)
    @description = attributes[:description]
  end

  def to_json(options = {})
    {id: @id, user_id: @user_id, description: @description}.to_json
  end
end