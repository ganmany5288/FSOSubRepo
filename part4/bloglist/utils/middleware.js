const logger = require('./logger')


const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name == 'CastError'){
        return response.status(400).send({error: 'malformatted id'})
    } else if (error.name == 'ValidationError'){
        return response.status(400).json({error: error.message})
    }else if (error.name == 'JsonWebTokenError'){
        return response.status(401).json({
            error: 'Invalid Token'
        })
    }
    logger.error(error.message)
    next(error)
}


