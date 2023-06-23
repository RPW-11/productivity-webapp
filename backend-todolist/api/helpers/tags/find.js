module.exports = {
    inputs: {
        ownerId: {
            type: 'string',
            required: true
        }
    },

    fn: async (inputs) => {
        try {
            let { ownerId } = inputs;

            const tag = await sails.models.tag.find({
                ownerId: ownerId
            });

            return tag;

        } catch (error) {
            throw error;
        }
    }
}