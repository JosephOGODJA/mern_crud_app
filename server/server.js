// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// Import dependencies
const express = require('express');
const cors = require('cors');
const connectToDB = require("./config/connectToDB");
const noteController = require('./controllers/noteControllers');

// Create an Express app
const app = express();

// Configure express app
app.use(cors());
app.use(express.json());

// Connect to database
connectToDB();

// Routing
app.get("/notes", noteController.fetchNotes);

app.get("/notes/:id", noteController.fetchNote);

app.post('/notes', noteController.createNote);

app.put("/notes/:id", noteController.updateNote);

app.delete("/notes/:id", noteController.deleteNote);

// Start our server
app.listen(process.env.PORT);