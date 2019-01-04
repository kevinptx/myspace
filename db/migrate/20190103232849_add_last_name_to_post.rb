class AddLastNameToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :last_name, :string
  end
end
