EdMom Platform
Welcome to EdMom, a comprehensive platform designed to support teenage mothers in continuing their education. EdMom provides users with access to various educational resources, courses, and support services. Built with modern web technologies like HTML, CSS, JavaScript, Node.js, and MongoDB, EdMom offers a seamless and responsive user experience.

Features
User Authentication: Secure registration and login functionality.
Course Enrollment: Browse and enroll in courses.
Resource Access: Access various educational resources and support services.
Responsive Design: Enjoy a seamless experience across devices.
Live Demo
You can try out the live demo of EdMom here: https://www.loom.com/share/17df03469ee04e1496b834e7b41e00c7?sid=077a5242-bc06-46f1-9a01-4afa47b7c6c9

Navigating the App
Home Page: Start by exploring the various features and resources offered by EdMom.
Sign Up/Login: Register or log in to access personalized features.
Course Enrollment: Browse and enroll in courses that match your interests and needs.
Tech Stack
EdMom is built using the following technologies:

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Getting Started
To set up and run the EdMom Platform on your local machine, follow these steps:

Prerequisites
Ensure you have the following installed on your machine:

Node.js (v12 or later)
npm (Node Package Manager)
MongoDB (local or cloud instance)
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/edmom-platform.git
cd edmom-platform
Install Backend Dependencies

Navigate to the backend directory and install the required packages:

bash
Copy code
cd backend
npm install
Install Frontend Dependencies

Navigate to the frontend directory and install the required packages:

bash
Copy code
cd ../frontend
npm install
Configuration
Backend Configuration

Create a .env file in the backend directory and add the following environment variables:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Frontend Configuration

Update the API endpoints in your frontend JavaScript files to match your backend server's URL.

Running the Application
Start the Backend Server

bash
Copy code
cd backend
npm start
The backend server will start on http://localhost:5000.

Start the Frontend Development Server

bash
Copy code
cd ../frontend
npm start
The frontend server will start on http://localhost:3000.

Accessing the Application
Open your browser and navigate to http://localhost:3000 to access the EdMom Platform.

Project Structure
backend: Contains the backend server code (Node.js, Express.js, MongoDB)

models: Mongoose models for User and Course
routes: API routes for users and courses
middleware: Authentication middleware
server.js: Entry point for the backend server
frontend: Contains the frontend code (HTML, CSS, JavaScript)

index.html: Main HTML file
styles.css: CSS styles
scripts.js: JavaScript code for frontend functionality
Contributing
We welcome contributions to the EdMom Platform. To contribute, please fork the repository, create a new branch, and submit a pull request.

License
This project is licensed under the MIT License.


 
