function errorTypes(error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
        return { status: 401, message: "Token Invalid" };
    }
    if (error.type === "Not Found") {
        return { status: 404, message: error.message };
    }
    if (error.type === "Conflict") {
        return { status: 409, message: error.message };
    }
    if (error.type === "Bad Request") {
        return { status: 400, message: error.message };
    }
    if (error.type === "Unauthorized") {
        return { status: 401, message: error.message };
    }
    return { status: 500, message: "Internal server error" };
}
export default function errorHandler(error, req, res, next) {
    console.log(error);
    var errorData = errorTypes(error);
    return res.status(errorData.status).send(errorData.message);
}
