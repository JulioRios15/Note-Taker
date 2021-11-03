import express from 'express';
import utils from '../utils/utils.js'

//Initialize the router
const router = express.Router();

//Route requests
router.get('/', (req, res) => {
    const jsonDB = utils.getJsonDB();
    console.log(jsonDB);

    if(jsonDB){
        return res.status(200).json(jsonDB);
    } else{
        return res.status(404).json({
            messege: "unable to find notes"
        })
    }
    
});

router.post('/', (req, res) => {
    console.log(req.body);
});

router.delete('/:id', (req, res) => {

});


export default router;