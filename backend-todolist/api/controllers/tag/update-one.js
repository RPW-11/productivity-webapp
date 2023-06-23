module.exports = {
    inputs: {
        tags: {
            type: 'ref'
        },
        ownerId: {
            type: 'string',
            required: true
        }
    },

    fn: async (inputs, exits) => {
        try {
            let { tags, ownerId } = inputs;

            const updated = await sails.helpers.tags.updateOne(tags, ownerId);
            return exits.success(updated);
        } catch (error) {
            return exits.error({statusCode:400, message: error.message})
        }
    }
}