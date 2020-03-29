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
|name|string|null: false,foreign_key: true|

### Association
- has_many :tweets
- has_many :users, through: :groups_users
- has_many :groups_users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :tweets
- has_many :groups, through: :groups_users
- has_many :groups_users




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
|name|string|null: false,foreign_key: true|

### Association
- has_many :tweets
- has_many :users, through: :groups_users
- has_many :groups_users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :tweets
- has_many :groups, through: :groups_users
- has_many :groups_users




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

