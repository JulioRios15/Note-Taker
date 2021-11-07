import express from "express";
import http from 'http';
import path from 'path';

// Routes imports
import noteRoutes from './routes/notesRoutes.js';

const PORT = process.env.PORT || 3500;

const __dirname = path.resolve(path.dirname(''));

// Initialize the server app
const app = express();

//Middlewares
app.use(express.static('public'));
app.use('/assets/css',express.static( __dirname + 'public/assets/css'));
app.use('/assets/js',express.static(__dirname + 'public/assets/js'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Initial Routes
//return index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  }); 

//return notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });  

//Note Routes
app.use('/api/notes', noteRoutes);


//Create the server
const httpServer = http.createServer(app);

//Start server
httpServer.listen(PORT);