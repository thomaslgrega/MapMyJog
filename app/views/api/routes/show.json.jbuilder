json.set! @route.id do
  json.extract! @route, :id, :creator_id, :name, :distance, :description, :waypoints, :activity
end