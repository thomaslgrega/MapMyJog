class AddAndChangeColumnsInRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :activity, :string, null: false

    remove_column :routes, :waypoints
    add_column :routes, :waypoints, :string, null: false

    add_index :routes, :activity
  end
end
