Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :routes, only: [:index]
    end
    
    resources :routes, only: [:show, :create, :destroy, :update,]
    resource :session, only: [:create, :destroy]
  end
end
