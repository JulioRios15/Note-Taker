import express from 'express';
import database from '../utils/databse.js'
import { v4 as uuidv4 } from 'uuid';

//Initialize the router
const router = express.Router();

//Route requests
router.get('/', async (req, res) => {
    const jsonDB = database.getJsonDB();

    if(jsonDB){
        return res.status(200).json(jsonDB);
    } else{
        return res.status(404).json({
            messege: "unable to find notes"
        })
    }
    
});

router.post('/', async (req, res) => {
    //Extract data from the body
    const {title, text} = req.body;

    //Get database 
    const jsonDB = database.getJsonDB();

    //Create new note with requested body info
    const newNote = {
        id: uuidv4(),
        title,
        text
    };

    jsonDB.push(newNote);
    database.updateDB(jsonDB);

    res.status(201).json(jsonDB);
});

router.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    const jsonDB = database.getJsonDB(); 
    const noteToDeleteIndex = database.getIndexForId(noteId, jsonDB);

    jsonDB.splice(noteToDeleteIndex, 1);

    database.updateDB(jsonDB);

    res.status(200).json(jsonDB)
});


export default router;