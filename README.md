A web application where users can search for artworks, create personalized exhibitions, and view detailed information about each piece.

Utilized free APIs from The Metropolitan Museum of Art and the Harvard Art Museums, users can access extensive art collections and the web app hopes to provide an engaging experience by allowing users to filter and search artworks based on their own criteria, they can then save their favorite pieces to their collection, and curate a personalized exhibition that can be viewed.

The application is built in the frontend with React with axios to fetch from the api databases and styled using Tailwind CSS and the backend with Express and Mongo to handle some server side logic and user data/collection management. Key features to include interactive thumbnails that display detailed artwork information upon selecting, and a temporary collection feature that allows users to easily add or remove artworks. This personalized exhibition feature enables users to curate their own collections.

Frontend:

On using the app locally for yourself:
To start the web app locally, clone the project repository to your local machine. Navigate to the projects root directory and run:
`npm install` to install all necessary dependencies.

Once the installation is finished, you can start the development server with:
`npm run dev`.

This launches the application using Vite and can be viewed and used at:
`http://localhost:{4-digit-port}`

On using the app on `https://exicura.netlify.app/`:

Landing Page -

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
