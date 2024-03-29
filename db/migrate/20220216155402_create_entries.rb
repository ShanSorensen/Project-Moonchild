class CreateEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :body
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
