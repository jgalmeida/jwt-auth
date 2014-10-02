class Todo
  attr_accessor :id, :user_id, :description

  def initialize(attributes)
    @description = attributes[:description]
  end
end