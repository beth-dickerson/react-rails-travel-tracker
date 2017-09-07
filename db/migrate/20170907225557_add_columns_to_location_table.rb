class AddColumnsToLocationTable < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :people, :string, null: false
    add_column :locations, :locale, :string, null: false
  end
end
