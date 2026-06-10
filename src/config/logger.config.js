const winston = require('winston');
require('winston-mongodb');
const {Writable} = require('stream');
const  {logToCosmosDB } = require('../clientApis/cosmos.Client')

const allowedTransports = [];

const customStream = new Writable({
    write(chunk, encoding, callback){
        const message = chunk.toString();
        console.log("Log intercepted in custom transport:", message);
        logToCosmosDB("error", message);
        callback();
    }
})

const customStreamTransport = new winston.transports.Stream({
    stream: customStream
}); 

allowedTransports.push(customStreamTransport)

allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),

        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))

/* allowedTransports.push(new winston.transports.MongoDB({
    level: error,
    db = LOG_DB_URL, 
    collection: 'logs'       //into the test db it will be created on connection.
 })) */

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),

        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    ),

    transports: allowedTransports
})

module.exports = logger;