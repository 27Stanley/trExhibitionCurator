To create a web application where users can search for artworks, create personalized exhibitions, and view detailed information about each piece. 

From utilizing free APIs from The Metropolitan Museum of Art and the Harvard Art Museums, users can access extensive art collections and the web app hopes to provide an engaging experience by allowing users to filter and sort artworks based on various criteria, save their favorite pieces to a temporary collection, and curate personalized exhibitions that can be viewed in use.

The application is built in the frontend with React with axios to fetch from the api databases and styled using Tailwind CSS and the backend with Express and Mongo to handle some server side logic and user data/collection management. Key features to include interactive thumbnails that display detailed artwork information upon selecting, and a temporary collection feature that allows users to easily add or remove artworks. This personalized exhibition feature enables users to curate their own collections.


Backend repo: https://github.com/27Stanley/trExiCuraBE

Api:
The base URL for all endpoints is https://trexicurabe.onrender.com/.

Users Endpoints:

Fetch All Users - Fetches a list of all users.

Request Type: GET Endpoint: /users

Example request: GET https://trexicurabe.onrender.com/users/

Fetch User by ID - Fetches details of a user by their unique ID.

Request Type: GET Endpoint: /users/{user_id}

Example Request: GET https://trexicurabe.onrender.com/users/${userId}

Create a New User - Adds a new user to the DB with the provided username.

Request Type: POST Endpoint: /users

Example Request: POST https://trexicurabe.onrender.com/users

Content Type - json: { "username": "purple_grapefruit" }

Delete User by ID - Removes a user from the databse by their unique ID.

Request Type: DELETE Endpoint: /users/{user_id}

Example Request: GET https://trexicurabe.onrender.com/users/${userId}

Curated Collections Endpoints:
tba 
