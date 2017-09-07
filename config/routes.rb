Rails.application.routes.draw do
  root 'static_pages#index'
  resources :locations, to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:index, :show]
    end
  end
end
