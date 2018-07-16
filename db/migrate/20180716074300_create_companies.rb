class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :title
      t.jsonb :info

      t.timestamps
    end
  end
end
