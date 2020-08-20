class Route < ApplicationRecord
  validates :creator_id, :name, :distance, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :creator_id
end
