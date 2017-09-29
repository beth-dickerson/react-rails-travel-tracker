# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

5.times do
  Venue.create!(
    name: "#{Faker::Cat.name}",
    address: "#{Faker::Space.galaxy}",
    phone: "#{Faker::PhoneNumber.phone_number}",
    url: "#{Faker::Internet.url}",
    photo:"#{Faker::Avatar.image}"
  )
end

3.times do
  Review.create!(
    title: "#{Faker::Dessert.variety}",
    rating: "***",
    content: "#{Faker::Coffee.notes}",
    venue_id: 1
  )
end
