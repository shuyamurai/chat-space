class CreateGroupUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :group_users do |t|
      t.bigint :group_id
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end