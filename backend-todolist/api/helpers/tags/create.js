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

            if(!tags){
                await sails.models.tag.create({
                    ownerId: ownerId
                })
            } else{
                await sails.models.tag.create({
                    tags: tags,
                    ownerId: ownerId
                })
            }
        } catch (error) {
            throw error;
        }
    }
}