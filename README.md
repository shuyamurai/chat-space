## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|

### Association
- has_many :message
- has_many :groups_users



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|


### Association
- has_many :groups_users
- has_many :message



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users
- belongs_to :groups



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group_id|integer|ull: false, foreign_key: true|
|user_id|integer|ull: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :groups















