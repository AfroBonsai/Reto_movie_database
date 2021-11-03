
Notflix, the movie database. Search and lease.


///////////////////////////////////////////////////////////////////////////

Users managing routes:

POST commands:
Login as an existing user:  http://localhost:3000/login
Create a new user:  http://localhost:3000/register

GET commands:
Show user information:  http://localhost:3000/:id
Show all users: http://localhost:3000/

PUT commands:
Update user information http://localhost:3000/:id

router.delete("/:id", auth, users.delete); // Delete an user - *Requires Admin privileges*
router.delete("/", auth, users.deleteAll);


///////////////////////////////////////////////////////////////////////////

Order managing routes:


router.post("/", orders.create);

router.get("/", orders.findAll);

router.delete("/:id", orders.delete);


///////////////////////////////////////////////////////////////////////////

Movie managing routes:


GET commands:

http://localhost:3000/movie/

http://localhost:3000/movie/:id

http://localhost:3000/movie/title/:title

http://localhost:3000/movie/genre/:genre

http://localhost:3000/movie/cast/:cast

http://localhost:3000/movie/location/:location

http://localhost:3000/movie/available/:available


POST commands:

http://localhost:3000/movie/

http://localhost:3000/movie/:id


DELETE commands:

http://localhost:3000/movie/:id


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