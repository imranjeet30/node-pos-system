const jwt = require("jsonwebtoken");
require("dotenv").config();

const authService = {};
authService.getAuthUser = async(req) => {
    let authHeader = req.headers.authorization
    let token = authHeader.split(" ");
    let decoded = await jwt.verify(token[1], process.env.JWT_SECRET);
    return decoded;
};

module.exports = authService;
