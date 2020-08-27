Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    get '/users/random', to: 'users#random', as: 'random'

    resources :users, only: [:create, :show, :index] do
      resources :routes, only: [:index]
      resources :friends, only: [:index]
    end
    
    resources :routes, only: [:show, :create, :destroy, :update,]
    resources :friends, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
