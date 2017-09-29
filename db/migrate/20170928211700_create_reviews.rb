class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :venue_id, null: false
      t.string :title, null: false
      t.string :rating, null: false
      t.text :content, null: false

      t.timestamps
    end
  end
end
