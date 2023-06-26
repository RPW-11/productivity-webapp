module.exports = {
    inputs: {
        ownerId: {
            type: 'string',
            required: true
        },
        searchVal: {
            type: 'string',
            defaultsTo: ''
        }
    },
    fn: async (inputs, exits) => {
        try {
            let { ownerId, searchVal } = inputs;
            const tasks = await sails.models.task.find({
                ownerId: ownerId,
                or: [
                    {tags: {contains: searchVal}},
                    {title: {contains: searchVal}}
                ]
            }).meta({makeLikeModifierCaseInsensitive: true});
            return exits.success(tasks);
        } catch (error) {
            return exits.error(error.message);
        }
    }
}