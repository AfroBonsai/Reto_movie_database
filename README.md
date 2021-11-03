
Notflix, the movie database. Search and lease.


///////////////////////////////////////////////////////////////////////////

Users managing routes:

POST commands:
Login as an existing user:  http://localhost:3000/user/login
Create a new user:  http://localhost:3000/user/register

GET commands:
Show user information:  http://localhost:3000/user/:id
Show all users: http://localhost:3000/user/

PUT commands:
Update user information: http://localhost:3000/user/:id

DELETE commands:
Delete an user: http://localhost:3000/user/:id *Requires Admin privileges*
WARNING! Delete all users: http://localhost:3000/user/ *Requires Admin privileges*


///////////////////////////////////////////////////////////////////////////

Order managing routes:

POST commands:
Create a new order: http://localhost:3000/order/

GET commands:
Show all orders: http://localhost:3000/order/

DELETE commands:
Delete all orders: http://localhost:3000/order/:id/


///////////////////////////////////////////////////////////////////////////

Movie managing routes:


GET commands:
Show all movies: http://localhost:3000/movie/
Find movie by ID: http://localhost:3000/movie/:id
Find movie by title: http://localhost:3000/movie/title/:title
Find movie by genre: http://localhost:3000/movie/genre/:genre
Find movie by cast: http://localhost:3000/movie/cast/:cast
Find movie by location: http://localhost:3000/movie/location/:location
Find movie by availability: http://localhost:3000/movie/available/:available

POST commands:
Create a new movie: http://localhost:3000/movie/

UPDATE commands:
Update an existing movie: http://localhost:3000/movie/:id

DELETE commands:
Delete a specific movie: http://localhost:3000/movie/:id

///////////////////////////////////////////////////////////////////////////


Templates:

Register user:

{
"name": "Gonzalo Perez",
"email":"gonzalo@gmail.com",
"password":"pass",
"superUser": false
}


Log In:

{
"email":"gonzalo@gmail.com",
"password":"pass"
}