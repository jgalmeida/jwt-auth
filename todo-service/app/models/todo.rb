class Todo
  attr_accessor :id, :description

  def initialize(attributes)
    @description = attributes[:description]
  end
end