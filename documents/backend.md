# Backend Documentation

## Express Server
Our express server lives on `localhost:8000`. Our React client is able to communicate with it and make axios calls to it because we are running our project in a dev environment. If we wanted to bring this project into production, we'd have to find a way to host the app (i.e. AWS or Heroku). 

Our Express server holds all of our backend routes, similar to the ones seen in Patrick Hill's class. We will primarily be using it to communicate with our Mongo database that holds collections such as `Users`, `Frogs`, `Challenges`, `Titles`, `Water`, and all of the other pieces of data required in our project.

We will be writing individual routers for each kind of collection/type of request we want (i.e. `routes/auth.js` for authentication and `routes/user.js` to access our User collection). Each router will then be imported into `routes/index.js` to be used in our server.

We can probably copy paste and reuse a lot of the code that we want for the backend, as most of the CRUD operations are very similar.

## Mongo
For each different kind of collection we want to add such as `Users`, `Frogs`, etc., we will have to add it to `/config/mongoCollections.js`. This collection will then have a corresponding JS file in the `/data` directory. We will write out our Mongo API to be able to perform CRUD operations on it.

We will have to create a seed file at some point for us to just test/demo on a clean set of data.