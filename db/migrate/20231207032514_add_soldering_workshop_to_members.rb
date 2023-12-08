class AddSolderingWorkshopToMembers < ActiveRecord::Migration[7.1]
  def change
    add_column :members, :soldering_workshop, :boolean
    add_index :members, :soldering_workshop
  end
end
