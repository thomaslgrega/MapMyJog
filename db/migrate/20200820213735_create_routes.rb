class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.float :distance, null: false
      t.text :description

      t.timestamps
    end

    add_index :routes, :creator_id
    add_index :routes, :name
  end
end
