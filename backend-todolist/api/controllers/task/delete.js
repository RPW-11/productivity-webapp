module.exports = {
    inputs: {
        id: {
            type: 'string',
            required: true
        }
    },

    fn: async (inputs, exits) => {
        try {
            let { id } = inputs;
            await sails.models.task.destroy({
                id: id
            })
            return exits.success("Task is deleted");
        } catch (error) {
            exits.error(error.message);
        }
    }
}