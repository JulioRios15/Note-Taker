import express from 'express';
import utils from '../utils/utils.js'

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
        title,
        text
    };

    jsonDB.push(newNote);
    utils.updateDB(jsonDB);
});

router.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    console.log(noteId);
});


export default router;