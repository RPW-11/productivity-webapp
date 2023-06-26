import api from "../../api";
import { useState } from "react";

const SelectTag = ({ ownerId }) => {
    const [onClick, setOnClick] = useState(false);
    const [tags, setTags] = useState([]);
    const [userTags, setUserTags] = useState([]);

    const tagClick = (val) => {
        setTags((prevTags) => [...prevTags, val]);
    }

    const addHandler = () => {
        setOnClick(!onClick);
        api.get('/tag', {
            params: {
                ownerId: ownerId
            }
        }).then(res => {
            console.log(res.data[0].tags);
            setUserTags(res.data[0].tags);
        }).catch(err => {
            console.log(err);
        })
    }

    return ( 
        <div>
            {onClick ? (
                <div className="flex flex-col justify-between items-center border rounded-md p-2">
                    <div className="flex flex-row justify-between w-full">
                        {tags.length === 0 ? (
                            <div>No tags for this task</div>
                        ) : (
                            <div className="flex py-2 w-full overflow-x-scroll pr-2">
                            {
                                tags.map((item, i) => (
                                    (
                                        <div className="bg-line px-2  text-sm mx-1 rounded-full cursor-pointer whitespace-nowrap" key={ i }> { item }</div>
                                    )
                                ))
                            }
                            </div>
                        )}
                        <div className="material-symbols-outlined cursor-pointer hover:text-gray-500" onClick={ () => {setOnClick()}}>close</div>
                    </div>
                    
                    <div className="w-full">Your Tags</div>
                    <div className="flex py-2 w-full">
                        {
                            userTags.map((item, i) => (
                                (
                                    <div onClick={() => tagClick(item)} className="bg-line px-2  text-sm mx-1 rounded-full cursor-pointer hover:bg-secondary" key={ i }> { item }</div>
                                )
                            ))
                        }
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="font-bold">Tags</div>
                        <div className="flex py-2 w-full overflow-x-scroll ml-2 mr-8">
                            {
                                tags.map((item, i) => (
                                    (
                                        <div className="bg-line px-2  text-sm mx-1 rounded-full cursor-pointer whitespace-nowrap" key={ i }> { item }</div>
                                    )
                                ))
                            }
                        </div>
                        <div onClick={ () => {addHandler()}}
                        className="material-symbols-outlined cursor-pointer text-dark hover:text-gray-500">add</div>
                    </div>
                    
                </div>
            )}
            
        </div>
     );
}
 
export default SelectTag;