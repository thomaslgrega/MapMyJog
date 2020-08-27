json.friends do
  @friends.each do |friend, idx|
    json.set! friend.id do
      json.extract! friend, :id, :email, :first_name, :last_name, :date_of_birth, :gender
    end
  end
end

json.friendships do 
  @friendships.each do |friendship|
    json.set! friendship.id do
      json.extract! friendship, :id, :friend_id
    end
  end
end
