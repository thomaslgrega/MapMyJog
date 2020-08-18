class AddColumnsToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :date_of_birth, :date, null: false
    add_column :users, :gender, :string, null: false
  end
end
