class ChangeColumnInRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :waypoints

    add_column :routes, :waypoints, :float, array: true, default: []
  end
end
