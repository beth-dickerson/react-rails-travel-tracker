class Venue < ApplicationRecord
  has_many :reviews
  
  validates :name, presence: true
  validates :address, presence: true
  validates :phone, presence: true
  validates :url, presence: true
  validates :photo, presence: true
end
