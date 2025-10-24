// Import Express framework
const express = require('express');

// Create Express app instance
const app = express();

// Define PORT
const PORT = 3000;

// Middleware: Parse incoming JSON requests
app.use(express.json());

// In-memory storage for books (no database)
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' }
];

// Auto-increment ID for new books
let nextId = 4;

// ===== GET ENDPOINTS =====

// GET / - Root endpoint (Test)
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Books REST API',
    endpoints: {
      getAllBooks: 'GET /books',
      getBookById: 'GET /books/:id',
      createBook: 'POST /books',
      updateBook: 'PUT /books/:id',
      deleteBook: 'DELETE /books/:id'
    }
  });
});

// GET /books - Retrieve all books
app.get('/books', (req, res) => {
  res.status(200).json({
    success: true,
    count: books.length,
    data: books
  });
});

// GET /books/:id - Retrieve a specific book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    data: book
  });
});

// ===== POST ENDPOINT (CREATE) =====

// POST /books - Create a new book
app.post('/books', (req, res) => {
  // Validate request body
  if (!req.body.title || !req.body.author) {
    return res.status(400).json({
      success: false,
      message: 'Title and Author are required'
    });
  }
  
  // Create new book object
  const newBook = {
    id: nextId++,
    title: req.body.title,
    author: req.body.author
  };
  
  // Add book to array
  books.push(newBook);
  
  res.status(201).json({
    success: true,
    message: 'Book created successfully',
    data: newBook
  });
});

// ===== PUT ENDPOINT (UPDATE) =====

// PUT /books/:id - Update an existing book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found`
    });
  }
  
  // Update book properties
  if (req.body.title) book.title = req.body.title;
  if (req.body.author) book.author = req.body.author;
  
  res.status(200).json({
    success: true,
    message: 'Book updated successfully',
    data: book
  });
});

// ===== DELETE ENDPOINT =====

// DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found`
    });
  }
  
  // Remove book from array
  const deletedBook = books.splice(bookIndex, 1);
  
  res.status(200).json({
    success: true,
    message: 'Book deleted successfully',
    data: deletedBook[0]
  });
});

// ===== ERROR HANDLING =====

// Handle 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message
  });
});

// ===== START SERVER =====

// Start listening on PORT
app.listen(PORT, () => {
  console.log(`Books REST API Server running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
