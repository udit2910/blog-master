# blog-master

To run the service : npm start

# Things we can do.

1 - Haven't use any encrption module/method for password. We can use 'mongoose-bcrypt' or 'crypto-js' to encode and decode password.
2 - system can have role like : Author (can post and edit his/her post only), User(can read and comment on the post), Admin (can have all the rights) which we can differentiate by having roles collection and user_id maped to that.
3 - based on role, can have role validator for the APIs as a middleware.

# Things I have done done.

1 - Signup.
2 - login. (JWT sign)
3 - post a blog.
4 - get blogs.
5 - update the blog.
6 - delete blog.
7 - add comment to the blog.

# Sign Up API

curl --location --request POST 'localhost:8080/api/users/v1/signUp' \
--header 'Content-Type: application/json' \
--data-raw '{
"name" : "abc",
"email" : "abc@gmail.com",
"password" : "12345678a",
"phone_no" : "9898989898"
}'

# LogIn API

curl --location --request POST 'localhost:8080/api/users/v1/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email" : "mrunal@gmail.com",
"password" : "12345678a"
}'

# Add Blog API

curl --location --request POST 'localhost:8080/api/blogs/v1/add' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoidWRpdCIsImVtYWlsIjoidWRpdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4YSIsInBob25lX25vIjoiOTAzMzIwMzIwNiIsImlhdCI6MTYxMzQ2OTIxOH0.n4EJXr4I4RqGp8yBLaGaOfROQqiMnbKnuJYjVZIE7lA' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "another Test article",
"description": "another desc",
"author_id": "1"
}'

# Get blogs API

curl --location --request GET 'localhost:8080/api/blogs/v1/' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoidWRpdCIsImVtYWlsIjoidWRpdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4YSIsInBob25lX25vIjoiOTAzMzIwMzIwNiIsImlhdCI6MTYxMzQ2OTIxOH0.n4EJXr4I4RqGp8yBLaGaOfROQqiMnbKnuJYjVZIE7lA' \
--data-raw ''

# Delete Blog API

curl --location --request DELETE 'localhost:8080/api/blogs/v1/remove/:user_id/:blog_id' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoidWRpdCIsImVtYWlsIjoidWRpdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4YSIsInBob25lX25vIjoiOTAzMzIwMzIwNiIsImlhdCI6MTYxMzQ2OTIxOH0.n4EJXr4I4RqGp8yBLaGaOfROQqiMnbKnuJYjVZIE7lA'

# Update Blog API

curl --location --request POST 'localhost:8080/api/blogs/v1/update' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoidWRpdCIsImVtYWlsIjoidWRpdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4YSIsInBob25lX25vIjoiOTAzMzIwMzIwNiIsImlhdCI6MTYxMzQ2OTIxOH0.n4EJXr4I4RqGp8yBLaGaOfROQqiMnbKnuJYjVZIE7lA' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "updated Test article",
"description": "updated desc",
"author_id": "1",
"blog_id": 3
}'

# Add comment to the blog API

curl --location --request PUT 'localhost:8080/api/blogs/v1/comment' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoidWRpdCIsImVtYWlsIjoidWRpdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4YSIsInBob25lX25vIjoiOTAzMzIwMzIwNiIsImlhdCI6MTYxMzQ2OTIxOH0.n4EJXr4I4RqGp8yBLaGaOfROQqiMnbKnuJYjVZIE7lA' \
--header 'Content-Type: application/json' \
--data-raw '{
"comment_by": 1,
"comment": "this article helped me a lot",
"blog_id": 6
}'
