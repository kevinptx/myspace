class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, except: [:index]

  def index
    render json: Post.all.order(created_at: :desc)
  end

  def show
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors
    end
  end

  def update
  end

  def destroy
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def post_params
    params.require(:post).permit(:body, :likes, :first_name, :last_name)
  end
end
