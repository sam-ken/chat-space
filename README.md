## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user




## groupsテーブル
Column|Type|Options|
|------|----|-------|
|nickname|string|null: false,foreign_key: true|
|integer|null: false, foreign_key: true|

### Association
- has_many :tweets
- has_many :users





## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false　foreign_key: true|
### Association
- has_many :tweets
- has_many :groups




## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, |
### Association
- belongs_to :user
- belongs_to　:group

