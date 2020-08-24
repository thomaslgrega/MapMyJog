class Route < ApplicationRecord
  validates :creator_id, :name, :distance, :activity, :waypoints, presence: true
  validates :activity, inclusion: { in: ['Run', 'Walk', 'Winter sport / Activity', 'Bike Ride', 'Sport/ Other Activity', 'Hike'] }

  belongs_to :user,
    class_name: :User,
    foreign_key: :creator_id
end
