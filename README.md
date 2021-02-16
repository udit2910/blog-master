# blog-master

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
