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
    exits: {
        success: {
            statusCode: 200,
            message: 'Tags are created'
        },
        badRequest: {
            statusCode: 400,
            message: 'Tags with its owner id already exist'
        }
    },

    fn: async (inputs, exits) => {
        try {
            let { tags, ownerId } = inputs;
            await sails.helpers.tags.create(tags, ownerId);
            return exits.success();
        } catch (error) {
            console.log(error);
            return exits.badRequest();
        }
    }
}