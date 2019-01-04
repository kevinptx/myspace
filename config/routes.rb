Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "api/auth"
  namespace :api do
    resources :users, only: [:index] do
      resources :posts, only: [:create]
    end
    resources :posts, only: [:index]
  end
end
