module.exports = {
    inputs: {
        ownerId: {
            type: 'string',
            required: true
        },
    },
    fn: async (inputs, exits) => {
        try {
            let { ownerId } = inputs;
            const tasks = await sails.models.task.find({
                ownerId: ownerId
            });
            return exits.success(tasks);
        } catch (error) {
            return exits.error(error.message);
        }
    }
}