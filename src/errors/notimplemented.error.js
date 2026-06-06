const BaseError = require('./baseError');
const { StatusCodes } = require('http-status-codes');

class NotImplemented extends BaseError{
    constructor(methodName){
        super("NOT Implemented", StatusCodes.NOT_IMPLEMENTED, `${methodName}`, {})
    }
}

module.exports = NotImplemented;