Rails.application.routes.draw do
  root 'static_pages#index'
  resources :venues, to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :venues, only: [:index, :show, :new, :create] do
        resources :reviews
      end
    end
  end
end
