const jwt = require("jsonwebtoken");
const tokenKey = 'crossmatchyuk22';

module.exports = async (req, res, next) => {
    var token;
    if(req.headers && req.headers.authorization){
        // auth header is present
        var parts = req.headers.authorization.split(' ');
        if(parts.length == 2){
            var scheme = parts[0];
            var credentials = parts[1];

            if(/^Bearer$/i.test(scheme)){
                token = credentials;
            }
        } else {
            return res.status(401).send('Format is Authorization: Bearer [token]');
        }

    } else{
        // No authorization header
        return res.status(401).send('Authentication is required')
    }

    // verify token
    try {
        const decodedToken = await jwt.verify(token, tokenKey);
        req.currentUser = decodedToken;
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }

    // proceed
    return next();
}