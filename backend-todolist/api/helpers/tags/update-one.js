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

    fn: async (inputs) => {
        try {
            let { tags, ownerId } = inputs;

            await sails.models.tag.updateOne({
                ownerId: ownerId
            }).set({
                tags:tags
            });

        } catch (error) {
            throw error;
        }
    }
}