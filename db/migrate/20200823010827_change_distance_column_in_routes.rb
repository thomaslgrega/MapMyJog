class ChangeDistanceColumnInRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :distance

    add_column :routes, :distance, :string, null: false
  end
end
