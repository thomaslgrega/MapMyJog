json.set! @friend.id do
  json.extract! @friend, :user_id, :friend_id
end