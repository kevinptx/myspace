class AddFirstNameToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :first_name, :string
  end
end
