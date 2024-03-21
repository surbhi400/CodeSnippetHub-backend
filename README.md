# Backend README

This README provides an overview of the backend architecture, technologies, and setup instructions for the project.

## Overview

The backend of this project is responsible for handling server-side logic, database interactions, and API endpoints to serve data to the frontend application.

## Technologies Used

- **Express.js**: A flexible and minimalist Node.js web application framework for building robust and scalable server-side applications.
- **MySQL**: A popular relational database management system used for storing and managing structured data efficiently.
- **dotenv**: A zero-dependency module for loading environment variables from a .env file into Node.js applications.
- **Cors**: Middleware for Express.js to enable Cross-Origin Resource Sharing (CORS) for secure communication between the backend and frontend.

## Setup Instructions

Follow these steps to set up and run the backend server locally:

1. Clone the repository from GitHub:

   ```bash
   git clone <repository-url>

2. Navigate to the backend directory:

   ```bash
   cd <backend-directory>

3. Install dependencies using npm:

   ```bash
   npm install

4. Create a .env file in the backend directory and configure the following environment variables:

   ```bash
   PORT=5000
   DB_HOST=localhost
   DB_USER=user_name
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name

5. Start the backend server:

   ```bash
   npm start

# API Endpoints
- GET /api/data: Retrieves all data from the database.
- GET /api/user/:userName: Retrieves data for a specific user based on their userId.

# Contributing
If you'd like to contribute to the backend development, please fork the repository, make your changes, and submit a pull request.
