class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if logged_in?
      render json: ['Already logged in'], status: 422
    elsif @user
      login!(@user)
      render "/api/users/show"
    else
      render json: ['Invalid username or password'], status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ['No current user'], status: 404
    end
  end
end
