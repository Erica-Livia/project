# Wanderlust- Tourism Website

Wanderlust is a tourism website from the project Discover Burundi, built using React, Node.js and MongoDB. It allows users to discover and book travel destinations.

## Accessing the Website

There are two ways you can access and view the Wanderlust website:

### Live Website

The live Wanderlust Website is deployed on Netlify:

[wanderlustbi](https:wanderlustbi.netlify.app)

### Locally

#### Prerequisites

Before getting started, ensure you have the following installed:

+ Node.js (v16+) and npm
+ MongoDB Community Server
+ Git

1. Clone the repo
`git clone https://github.com/Erica-Livia/wanderlust.git`

2. Install backend dependencies
`cd wanderlust/backend`
`npm install`
 
3. Configure environment variables
+ Create a .env file in /backend and add the following:
`MONGO_URI='(will be available later)'`
`PORT=4000`

4. Seed database
`node seeds/seed.js`

5. Install frontend dependencies
`cd ../frontend`
`npm install`

6. Start development servers
+ API server:
`cd ../backend`
`npm run dev (for nodemon)`
+ React server:
`npm start`

The frontend app should now be running on http://localhost:3000.

# Explore Burundi's top attractions on the map!
