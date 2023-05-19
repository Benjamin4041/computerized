# Computerized Registration Number System (CRNS)

CRNS is a web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to manage registration numbers in a computerized manner.

## Features

- User Registration: Users can register with their credentials to access the system.
- User Authentication: Secure user authentication is implemented to protect sensitive data and ensure authorized access.
- Registration Number Management: Users can add registration numbers.
- Search and Filtering: The system provides search and filtering capabilities to quickly find specific registration numbers based on different criteria.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/CRNS.git
   ```

2. Navigate to the project directory:
   ```
   cd CRNS
   ```

3. Install dependencies for the server:
   ```
   cd backend
   npm install
   ```

4. Configure the environment variables:
   - Create a `.env` file in the `backend` directory.
   - Set the necessary environment variables (e.g., database connection string, secret key, etc.).

5. Start the server:
   ```
   cd ../backend
   npm start
   ```
   ```

8. Access the application in your browser at `http://localhost:3000`.

## Folder Structure

```
├── backend/         # Server-side code
├── frontend/        # Client-side code
├── public/          # Public assets
└── README.md        # Project documentation
```

## Technologies Used

- MongoDB: NoSQL database for storing registration number data.
- Express.js: Backend framework for handling HTTP requests and APIs.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime environment for server-side development.
- Mongoose: Object Data Modeling (ODM) library for MongoDB.
- JWT: JSON Web Tokens for user authentication and authorization.

## Contributing

Contributions to the CRNS project are welcome. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request, explaining the changes you have made.


## Hosted link
https://sensational-speculoos-baf4c6.netlify.app

## License

This project is licensed under the [MIT License](LICENSE).
