class RenameColumnsInUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :fname, :first_name
    rename_column :users, :lname, :last_name
  end
end
