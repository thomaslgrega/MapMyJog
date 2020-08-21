class Api::RoutesController < ApplicationController
  def index
    @routes = Route.where(creator_id: params[:user_id])
    render "/api/routes/index"
  end

  def show
    @route = Route.find_by(id: params[:id])
    if @route
      render :show
    else
      render json: ['Route does not exist'], status: 404
    end
  end

  def create
    @route = Route.new(route_params)
    @route.creator_id = current_user.id

    if @route.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    route = Route.find_by(id: params[:id])
    @user = current_user
    route.destroy if @user.id === route.creator_id
    render "/api/users/show"
  end

  def update
    @route = Route.find_by(id: params[:id])
    if @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  private
  def route_params
    params.require(:route).permit(:name, :description, :distance, :waypoints)
  end
end
