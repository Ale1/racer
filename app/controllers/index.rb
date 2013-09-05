


get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/back' do
  session.clear
  redirect '/'
end

post '/game' do
  player1 = Player.create!(name: params[:handle1])
  player2 = Player.create!(name: params[:handle2])
  session[:player1] = [player1.id,player1.name] 
  session[:player2] = [player2.id,player2.name]
  session

 erb :track
end


