@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :creator_id, :name, :distance, :description
  end
end