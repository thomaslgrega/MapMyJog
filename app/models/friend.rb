class Friend < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates :friend_id, uniqueness: { scope: :user_id, message: "already your friend" }

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id
end
