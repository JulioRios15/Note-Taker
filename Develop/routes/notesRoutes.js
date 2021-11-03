import express from 'express';
import utils from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';

//Initialize the router
const router = express.Router();

//Route requests
router.get('/', async (req, res) => {
    const jsonDB = utils.getJsonDB();

    if(jsonDB){
        return res.status(200).json(jsonDB);
    } else{
        return res.status(404).json({
            messege: "unable to find notes"
        })
    }
    
});

router.post('/', async (req, res) => {
    const {title, text} = req.body;
    const jsonDB = utils.getJsonDB();
    const newNote = {
        id: uuidv4(),
        title,
        text
    };

    jsonDB.push(newNote);
    utils.updateDB(jsonDB);

    res.status(201).json(jsonDB);
});

router.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    const jsonDB = utils.getJsonDB(); 
    const noteToDeleteIndex = utils.getIndexForId(noteId, jsonDB);

    jsonDB.splice(noteToDeleteIndex, 1);
    
    utils.updateDB(jsonDB);

    res.status(200).json(jsonDB)
});


export default router;