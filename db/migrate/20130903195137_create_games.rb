class CreateGames < ActiveRecord::Migration
  def change 
    create_table :games do |t|
      t.text :winner
      t.integer :time
      t.timestamps 
    end
  end
end
