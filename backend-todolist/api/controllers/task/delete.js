module.exports = {
    inputs: {
        _id: {
            type: 'string',
            required: true
        }
    },

    fn: async (inputs, exits) => {
        try {
            let { _id } = inputs;
            await sails.models.task.destroy({
                _id: _id
            })
            return exits.success("Task is deleted");
        } catch (error) {
            exits.error(error.message);
        }
    }
}