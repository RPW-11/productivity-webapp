const deleteItem = (itemId, api) => {

    api.delete('/task', {
        params:{
            id: itemId
        }
        // id: itemId
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    })
};

export default deleteItem;