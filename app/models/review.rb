class Review < ApplicationRecord
  belongs_to :venue

  validates :title, presence: true
  validates :rating, presence: true
  validates :content, presence: true
end
