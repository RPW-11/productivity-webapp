const bcrypt = require('bcrypt');
const { exits } = require('../../controllers/user/signup');
module.exports = {

    friendlyName: 'Hash Password',

    inputs: {
        data: {
            type: 'ref',
        }
    },

    fn: async (inputs, exits) => {
        const saltRounds = 10;
        try {
            const hashedData = await bcrypt.hash(inputs.data, saltRounds);
            return exits.success(hashedData);
        } catch (error) {
            throw error;
        }
    }
}