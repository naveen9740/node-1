const errorResponse = (message, data, status = 400 , timeTaken="0") => {
    return {
        status,
        message,
        data,
        error: false,
        timeTaken
    }
}

module.exports = errorResponse;