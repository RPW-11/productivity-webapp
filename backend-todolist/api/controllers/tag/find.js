
module.exports = {
    inputs: {
        ownerId: {
            type: 'string',
            required: true
        }
    },

    fn: async (inputs, exits) => {
        try {
            let { ownerId } = inputs;

            const tag = await sails.helpers.tags.find(ownerId);
            return exits.success(tag);

        } catch (error) {
            console.log(error);
            return exits.error();
        }
    }
}