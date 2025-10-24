# Books REST API

A simple REST API for managing a list of books using Node.js and Express.js.

## Features

- ✅ GET all books
- ✅ GET book by ID
- ✅ POST (Create) new book
- ✅ PUT (Update) book
- ✅ DELETE book
- ✅ Error handling
- ✅ JSON request/response

## Installation

```bash
npm install
```

## Run Server

```bash
node server.js
```

Server runs on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /books | Get all books |
| GET | /books/:id | Get book by ID |
| POST | /books | Create new book |
| PUT | /books/:id | Update book |
| DELETE | /books/:id | Delete book |

## Test with Postman

1. Download Postman
2. Create requests for each endpoint
3. Test CRUD operations

## Project Structure

```
task_3/
├── server.js              # Main Express server
├── package.json          # Project dependencies
├── INTERVIEW_QUESTIONS.md # All 10 interview Q&A
└── README.md             # This file
```

## Interview Questions Covered

See `INTERVIEW_QUESTIONS.md` for detailed answers to:

1. What is REST?
2. What are HTTP methods and their use?
3. How do you handle routes in Express?
4. What is middleware in Express?
5. How do you parse JSON in Express?
6. What status codes do you use for CRUD?
7. How would you handle errors in Express?
8. What is CORS?
9. Explain request and response objects in Express
10. How do you test API endpoints?

## Technologies

- Node.js
- Express.js
- JSON

## Author

namanpal07

## Date

October 2025
