module.exports.info = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify("Hello from Ocomis Serverless Info Service")
    }
}
