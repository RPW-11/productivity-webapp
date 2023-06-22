const jwt = require("jsonwebtoken");

module.exports = {
    inputs: {
        tokenData: {type: 'ref'},
        // token key should be registered in production and so does token expiery
        tokenKey: {type: 'ref', defaultsTo: 'crossmatchyuk22'},
        expiresIn: {type: 'ref', defaultsTo: '24h'}
    },
    fn: async (inputs) => {
        try {
            expiresIn = inputs.expiresIn
            const token = await jwt.sign(inputs.tokenData, 
                inputs.tokenKey, { expiresIn, });
            return token;
        } catch (error) {
            throw error;
        }
    }
}