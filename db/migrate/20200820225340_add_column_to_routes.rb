class AddColumnToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :waypoints, :integer, array: true, default: []
  end
end
