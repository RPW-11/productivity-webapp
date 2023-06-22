const bcrypt = require('bcrypt');

module.exports = {
    inputs: {
        unhashedData: {type: 'ref'},
        hashedData: {type: 'ref'},
    },

    fn: async function(inputs){
        try {
            const isMatch = await bcrypt.compare(inputs.unhashedData, inputs.hashedData);
            return isMatch;
        } catch (error) {
            throw error;
        }
    }
}