class Comment < ApplicationRecord
  validates :author_id, :route_id, :body, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :route,
    class_name: :Route,
    foreign_key: :route_id
end
