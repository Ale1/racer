class Player < ActiveRecord::Base
  has_and_belongs_to_many :games
  validates :name, presence: true, uniqueness: true, length: { minimum: 1 }
  # Remember to create a migration!



end
