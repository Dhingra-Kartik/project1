const { CosmosClient} = require('@azure/cosmos');

//connect application to CosmosDB, 4 things required
const endpoint = "";  //URI
const key = "";   //keys/primary key
const databseId = ""; //data explorer tab/DATA/containId our case winston-error-logging
const containerId=""; //errorlogs

const client = new CosmosClient({
    endpoint, 
    key
})
const database = client.database(databaseId);
const container = database.container(containerId);

async function logToCosmosDB(level, message){
    try {
        await container.items.create({
            timeStamp: new Date().toISOString(),
            level: level,
            message: message
        });
        console.log("Log entry created in Cosmos DB")
    } catch (error) {
        console.log("Error logging to Cosmos DB");
    }
}
module.exports =  { logToCosmosDB };