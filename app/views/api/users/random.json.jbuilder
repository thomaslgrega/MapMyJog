@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :first_name, :last_name, :date_of_birth, :gender
  end
end