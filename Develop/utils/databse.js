import fs from 'fs';

const getJsonDB = () => {
    const dbFile = fs.readFileSync('./db/db.json');
    const jsonData = JSON.parse(dbFile);

    return jsonData;
}

const updateDB = (data) => {
    //TODO: Check first if db exist
    const newData = JSON.stringify(data);
    return fs.writeFileSync("db/db.json", newData);
}

const getIndexForId = (idToFind, data) => {

    for (let i = 0; i < data.length; i++) {
        const currentNoteId = data[i].id;
        if(currentNoteId === idToFind) return i;    
    }

    return null;
}

export default {
    getJsonDB,
    updateDB,
    getIndexForId
}