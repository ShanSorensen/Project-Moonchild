Rails.application.routes.draw do
  resources :entries, only: [:index, :show, :create, :destroy]
  resources :users, only: [:show, :create, :destroy]


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
