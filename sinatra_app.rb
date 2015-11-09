require 'rubygems'
require 'sinatra'

class MyApp < Sinatra::Application

  set :public_folder, 'public'
  get '/' do
    erb :'index.html'
  end
  get '/trinity.html' do
    erb :'trinity.html'
  end
  get '/enlace.html' do
    erb :'enlace.html'
  end
  get '/team.html' do
    erb :'team.html'
  end
  get '/designs.html' do
    erb :'designs.html'
  end
end