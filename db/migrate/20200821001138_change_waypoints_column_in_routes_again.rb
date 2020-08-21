class ChangeWaypointsColumnInRoutesAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :waypoints

    add_column :routes, :waypoints, :string, array: true, default: [], null: false
  end
end
