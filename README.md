<h3>A web application where users can search for artworks, create personalized exhibitions, and view detailed information about each piece.</h3>

Utilized free APIs from The Metropolitan Museum of Art and the Harvard Art Museums, users can access extensive art collections and the web app hopes to provide an engaging experience by allowing users to filter and search artworks based on their own criteria, they can then save their favorite pieces to their collection, and curate a personalized exhibition that can be viewed.

The application is built in the frontend with React with axios to fetch from the api databases and styled using Tailwind CSS and the backend with Express and Mongo to handle some server side logic and user data/collection management. Key features to include interactive thumbnails that display detailed artwork information upon selecting, and a temporary collection feature that allows users to easily add or remove artworks. This personalized exhibition feature enables users to curate their own collections.

<h3>Frontend:</h3>

On using the app locally for yourself:
To start the web app locally, clone the project repository to your local machine. Navigate to the projects root directory and run:
`npm install` to install all necessary dependencies.

Once the installation is finished, you can start the development server with:
`npm run dev`.

This launches the application using Vite and can be viewed and used at-
`http://localhost:{4-digit-port}`

<h4>On using the app on `https://exicura.netlify.app/`:</h4>

<h6>Landing Page:<h6>
  <p>The default page for the web app, it showcases a carousel of art images as a hero shot, promotes exploration of custom art collections from the Api's, and features highlighted sections on Renaissance and contemporary art exhibitions, with navigation to those links for further exploration. 

Above each screen of the app will be a navbar component and a user section.
Below each screen will have the footer with some text about the app.

The default comment from the user section will ask the user to login, redirecting to the account page where the user can login with a pre-registered username or create a new account with a unique username.</p>



<h6>Gallery:<h6>
    <p>The Gallery screen fetches and displays all the art department data from the Metropolitan Museum of Art and the Harvard Arts Museum. It presents them in a categorized list format with interactable links for further exploration. When choosing one from the list, it includes will display a loading animation for a better user experience while the data is being fetched.

Upon clicking into one of the catagories, users can view the art catagorised by that museum. If they are logged in while doing so, there is the option to add art that they like to their personal curated collection available on the "your art collection" tab in the navbar. </p>


<h6>Find Art:<h6>
    <p>The Find Art screen allows users to search for artwork based on their own criteria, displaying the results in a detailed, scrollable list format. Here, the users can find more detailed information for each search result by follow links to learn more about each artwork from the respective museum's website. Afterwards, users can also still choose to add that art piece to their collection if they choose to.</p>


<h6>Your Art Collection:<h6>
    <p>The Your Art Collection screen displays a user's curated art collection, retrieved from the mongodb database. Here, the user can view the art they've added from exploring the apis. If there are any that they would wish to refresh their knowledge by clicking the learn more link. If they decide that they do not want that piece in their collection, they can also remove it from the collection.</p>



<h6>Account:<h6>
    <p>The Account screen has very simple user authentication, allowing users to log in or create a new account. When logging in or creating an account, it may take a while as the host mongo backend may need some time to startup to communicate with the hosted website. Upon login or creating an account with a unique username, the app will redirect their curated art collection screen or the home screen respectivley. At the end of the session, users may choose to logout from here, refreshing the page. All user activity relating to adding or removing art from their collection will be saved.</p>


<h3>Backend: https://github.com/27Stanley/trExiCuraBE</h3>

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
