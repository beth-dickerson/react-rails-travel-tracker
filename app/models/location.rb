class Location < ApplicationRecord
  validates :name, presence: true
  validates :people, presence: true
  validates :locale, presence: true
end
