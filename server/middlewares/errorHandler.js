const http = require('http');

module.exports = function (err, req, res, next) {

    // Since called from routing catch block, err is guaranteed to be an Exception (not all). Also, next() will not be called.
    const errMessage = err.message;
    const statusCode = err.code in http.STATUS_CODES ? err.code : 500;
    res.status(statusCode).send(errMessage);
};