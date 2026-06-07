const BaseError = require('./baseError');
const { StatusCodes } = require('http-status-codes');

class NotImplemented extends BaseError{
    constructor(methodName){
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName}`, {})
    }
}
module.exports = NotImplemented;