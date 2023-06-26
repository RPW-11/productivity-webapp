const getItem = (params, api) => {
    let {ownerId, tag } = params;
    return new Promise((resolve, reject) => {
        api.get('/task',{
            params: {
                ownerId: ownerId,
                searchVal: tag
            }
        }).then(res =>{
            const dataMap = new Map();
            res.data.forEach((item)=>{
                dataMap.set(item.id, item);
            })
            resolve(dataMap);
        }).catch(err => {
            console.log(err);
            reject(err);
        });
    });
    
};

export default getItem;