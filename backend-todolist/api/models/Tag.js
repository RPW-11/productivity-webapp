module.exports = {
    attributes: {
        tags: {
            type: 'ref',
            defaultsTo: ['Not Started']
        },
        //a ref to the user
        ownerId: {
            model: 'user',
            unique: true,
        }
    }
}