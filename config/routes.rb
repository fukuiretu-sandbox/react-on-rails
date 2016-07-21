Rails.application.routes.draw do
  root 'home#index'

  get '/sample' => 'sample#index'
end
