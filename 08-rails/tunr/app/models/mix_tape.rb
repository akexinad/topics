# == Schema Information
#
# Table name: mix_tapes
#
#  id         :bigint(8)        not null, primary key
#  title      :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MixTape < ApplicationRecord
  belongs_to :user, :optional => true
  has_and_belongs_to_many :songs
end
