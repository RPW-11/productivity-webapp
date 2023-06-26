module.exports = {
    inputs: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string'
        },
        ownerId: {
            type: 'string',
            required: true
        },
        tags: {
            type: 'ref'
        }
    },

    fn: async (inputs, exits) => {
        try {
            let { title, description, ownerId, tags } = inputs;
            title = title.trim();
            description = description.trim();

            // check the existing tag and add the new tags
            var existingTag = await sails.models.tag.findOne({ownerId: ownerId});
            existingTag = existingTag.tags
            console.log(existingTag);
            if (tags){
                console.log(tags);
                tags.forEach((item) => {
                    if(!existingTag.includes(item)){
                        existingTag.push(item);
                    }
                });
            }
            console.log('Existing tags', existingTag);
            

            // update tags
            await sails.helpers.tags.updateOne(existingTag, ownerId);
            console.log('Updating..');
            // create the task
            await sails.models.task.create({
                title: title,
                description: description,
                ownerId: ownerId,
                tags: tags
            })
            console.log('Creating');
            return exits.success('Task is created');

        } catch (error) {
            console.log(error);
            return exits.error({statusCode: 400, message: 'Bad Request'});
        }
    }
}