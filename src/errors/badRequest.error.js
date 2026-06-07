const BaseError = require('./baseError');
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
    constructor(propertyName){
        super("BadRequest", StatusCodes.BAD_REQUEST, `Invalid Strcuture for ${propertyName} provided`) //if add problem, no description, invalid, bad req, client side issue
    }
}

module.exports = BadRequest;