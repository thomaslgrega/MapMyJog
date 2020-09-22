Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    get '/users/random', to: 'users#random', as: 'random'
    post '/users/search', to: 'users#search', as: 'search'

    resources :users, only: [:create, :show, :index] do
      resources :routes, only: [:index]
      resources :friends, only: [:index]
    end
    
    resources :routes, only: [:show, :create, :destroy, :update,] do
      resources :comments, only: [:index]
    end

    resources :friends, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :update]
    resource :session, only: [:create, :destroy]
  end
end
