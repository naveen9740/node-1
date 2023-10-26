const successResponse = (message, data, status = 200 , timeTaken="0") => {
    return {
        status,
        message,
        data,
        error: false,
        timeTaken
    }
}

module.exports = successResponse;