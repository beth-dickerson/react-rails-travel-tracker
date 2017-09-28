class CreateVenues < ActiveRecord::Migration[5.0]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.text :address, null: false
      t.string :phone, null: false
      t.string :url, null: false
      t.string :photo, null: false

      t.timestamps
    end
  end
end
