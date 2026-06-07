const BaseError = require("../errors/baseError");
const {StatusCodes} = require('http-status-codes');

function ErrorHandler(err, req, res, next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false, 
            message: err.message,
            error: err.details,
            data : {}
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false, 
            message: `Something went wrong`,
            error: err,
            data : {}  //exception won't having any data, if data was there it would have not been an exception
        })
}
module.exports = ErrorHandler;