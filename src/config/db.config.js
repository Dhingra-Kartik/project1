const mongoose = require('mongoose');
const { ATLAS_DB_URL, OUR_NODE_ENV } = require('./server.config');

async function connectToDb(){
    try{
        if(OUR_NODE_ENV == "development"){
        await mongoose.connect(ATLAS_DB_URL);
    }
    } catch (error){
        console.log("Unable to connect to DB server");
        console.log(error);
    }
}
module.exports = connectToDb;