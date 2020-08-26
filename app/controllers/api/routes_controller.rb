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
      render json: @route.errors.full_messages, status: 422
    end
  end

  def destroy
    route = Route.find_by(id: params[:id])
    @user = current_user

    if route 
      if @user.id === route.creator_id 
        route.destroy 
        render "/api/users/show"
      else
        render json: ['This isn\'t your route!'], status: 422
      end
    else
      render json: ['Route doesn\'t exist'], status: 404
    end
  end

  def update
    @route = Route.find_by(id: params[:id])
    
    if @route
      if @route.update(route_params)
        render :show
      else
        render json: @route.errors.full_messages, status: 422
      end
    else
      render json: ['Route could not be found'], status: 404
    end
  end

  private
  def route_params
    params.require(:route).permit(:name, :description, :distance, :waypoints, :creator_id, :activity)
  end
end
