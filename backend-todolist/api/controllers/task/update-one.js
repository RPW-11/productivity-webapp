module.exports = {
    inputs: {
        _id: {
            type: 'string',
            required: true
        },
        data: {
            type: 'ref',
            required: true
        }
    },

    fn: async (inputs, exits) => {
        try {
            let { _id, data } = inputs;

            const updated = await sails.models.task.updateOne({
                _id: _id
            }).set(data);
            exits.success(updated);
        } catch (error) {
            exits.error(error.message);
        }
    }
}