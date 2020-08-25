class Api::FriendsController < ApplicationController
  def index
    @friendships = Friend.where(user_id: params[:user_id])
    friend_ids = @friendships.map { |friendship| friendship.friend_id }
    @friends = User.find(friend_ids)
    render "api/friends/index"
  end 

  def create
    @friend = Friend.new(friend_params)
    @friend.user_id = current_user.id

    if @friend.save
      render :index
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    friend = Friend.find_by(id: params[:id])
    @user = current_user
    if @user.id === friend.user_id
      friend.destroy
      render "api/users/show"
    else
      render json: ['This isn\'t your friend!'], status: 422
    end
  end

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  end

end
