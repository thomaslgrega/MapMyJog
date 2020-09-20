class Route < ApplicationRecord
  validates :creator_id, :name, :distance, :activity, :waypoints, presence: true
  validates :activity, inclusion: { in: ['Run', 'Walk', 'Winter sport / Activity', 'Bike Ride', 'Sport/ Other Activity', 'Hike'], message: "cannot be blank" }

  belongs_to :user,
    class_name: :User,
    foreign_key: :creator_id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :route_id
end
