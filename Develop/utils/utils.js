import fs from 'fs';

const getJsonDB = () => {
    const dbFile = fs.readFileSync('./db/db.json');
    const jsonData = JSON.parse(dbFile);

    return jsonData;
}

export default {
    getJsonDB
}