class AddBatteryWorkshopToMembers < ActiveRecord::Migration[7.1]
  def change
    add_column :members, :battery_workshop, :boolean
    add_index :members, :battery_workshop
  end
end
