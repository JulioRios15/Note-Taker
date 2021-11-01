import express from "express";
import http from 'http';

const port = 3500;

// Initialize the server app
const app = express();

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Create the server
const httpServer = http.createServer(app);

//Start server
httpServer.listen(port, 
    async () => {
    // Log to the console
    console.log(`server running on port:${port}`);
});