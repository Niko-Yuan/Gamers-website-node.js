# Gamers Website Node Backend

This back-end server is the foundation of the Gamers website, leveraging the robust **Express.js** framework to power the platform's functionality.

## Gamers Website URL:
You can access the Gamers website by clicking the link below:

[https://gamers-nkbr.onrender.com](https://gamers-nkbr.onrender.com)

## Source Code for the Front-end Website:
For those interested in exploring the front-end of the Gamers website, the source code is available on GitHub:

[https://github.com/Niko-Yuan/Gamers-website-react](https://github.com/Niko-Yuan/Gamers-website-react)

### Usage Instructions:
To effectively set up and utilize this back-end server, follow these detailed steps:

1. **Installation of Dependencies:**

   Before getting started, run the following command to install the required packages:

   ```shell
   npm install

2. **Running the Server:**

    To start the server, use the following command:

    ```shell
    npm run start:prod

## Gamers Website API Documentation

This documentation outlines the available API endpoints, their functionality, and the necessary information to interact with the Gamers website's back-end server.

### Authentication Endpoints

#### Sign Up
- **Endpoint**: `/api/auth/signup`
- **Method**: `POST`
- **Description**: Create a new user account for the Gamers website.
- **Required Parameters**:
  - `username` (string): The username for the new user.
  - `email` (string): The email address for the new user.
  - `password` (string): The password for the new user.
- **Middleware**: 
  - `verifySignUp.checkDuplicateUsernameOrEmail`: Checks if the provided username or email is already in use.
  - `verifySignUp.checkRolesExisted`: Checks if the specified user role(s) exist.
- **Controller**: `controller.signup`

#### Sign In
- **Endpoint**: `/api/auth/signin`
- **Method**: `POST`
- **Description**: Authenticate an existing user and receive an access token for subsequent requests.
- **Required Parameters**:
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
- **Controller**: `controller.signin`

### User Endpoints

#### Access All
- **Endpoint**: `/api/test/all`
- **Method**: `GET`
- **Description**: Retrieve public content accessible to all users.
- **Controller**: `controller.allAccess`

#### Access User Dashboard
- **Endpoint**: `/api/test/user`
- **Method**: `GET`
- **Description**: Retrieve user-specific content for authenticated users.
- **Middleware**: `authJwt.verifyToken`: Verifies the user's access token.
- **Controller**: `controller.userBoard`

#### Access Admin Dashboard
- **Endpoint**: `/api/test/admin`
- **Method**: `GET`
- **Description**: Retrieve admin-specific content for authenticated admin users.
- **Middleware**:
  - `authJwt.verifyToken`: Verifies the user's access token.
  - `authJwt.isAdmin`: Ensures the user has an admin role.
- **Controller**: `controller.adminBoard`

### Server Deployment
The Gamers website server is deployed at the following URL:
[https://gamers-server.onrender.com](https://gamers-server.onrender.com)

Please refer to this documentation to interact with the provided API endpoints effectively. For more detailed information on request formats and expected responses, consult the individual endpoint descriptions.