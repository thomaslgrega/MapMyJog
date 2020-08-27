@friends.each do |friend|
  json.set! friend.id do
    json.extract! friend, :id, :email, :first_name, :last_name, :date_of_birth, :gender
  end
end