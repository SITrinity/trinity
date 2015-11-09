require 'rubygems'
require 'sinatra'

class MyApp < Sinatra::Application

  set :public_folder, 'public'
  get '/' do
    erb :'index.html'
  end 
end