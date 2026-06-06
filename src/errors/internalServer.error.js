const BaseError = require('./baseError');

const { StatusCodes } = require('http-status-codes');

class ServerError extends BaseError{
    constructor(details){
        super("ServerError", StatusCodes.INTERNAL_SERVER_ERROR, `Something went wrong`, details)
    }
}
module.exports = ServerError;
