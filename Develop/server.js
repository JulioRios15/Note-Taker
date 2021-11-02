import express from "express";
import http from 'http';
import path from 'path';

const PORT = 3500;
const __dirname = path.resolve(path.dirname(''));

// Initialize the server app
const app = express();

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  }); 
   
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });  


//Create the server
const httpServer = http.createServer(app);

//Start server
httpServer.listen(PORT, 
    async () => {
    // Log to the console
    console.log(`server running on port:${PORT}`);
});