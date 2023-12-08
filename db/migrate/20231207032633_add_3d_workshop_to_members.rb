class Add3dWorkshopToMembers < ActiveRecord::Migration[7.1]
  def change
    add_column :members, :_3d_workshop, :boolean
    add_index :members, :_3d_workshop
  end
end
