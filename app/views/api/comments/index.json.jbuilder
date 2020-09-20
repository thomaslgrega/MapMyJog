@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :author_id, :route_id, :body, :created_at
  end
end