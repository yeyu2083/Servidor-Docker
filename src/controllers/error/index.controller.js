const error = (err, req, res, next) => {
    res.status(err.httpStatus || 500).send(err)
}

export default error