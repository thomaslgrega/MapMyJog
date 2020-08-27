class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    user_id = current_user.id
    friendships = Friend.where("user_id = ?", user_id)
    friend_ids = friendships.map { |friendship| friendship.friend_id }
    @friends = User.find(friend_ids)
    render :index
  end
  
  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json ['User could not be found'], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :date_of_birth, :gender)
  end
end