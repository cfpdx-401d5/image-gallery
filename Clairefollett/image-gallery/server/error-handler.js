function ErrorHandler(err, req, res, next) {
    res.status(err.code);
    res.send({err});
}

module.exports = ErrorHandler;