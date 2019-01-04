class AddLikedPostsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_posts, :text
  end
end
