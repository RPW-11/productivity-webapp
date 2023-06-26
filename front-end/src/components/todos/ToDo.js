import Tag from "./components/Tag";
import ConfirmBtn from "../buttons/ConfirmBtn";
import SearchBar from "./components/SearchBar";
import AddForm from "./components/AddForm";
import api from "../../api";
import getItem from "./handlers/getItem";
import deleteItem from "./handlers/deleteItem";
import { useEffect, useState } from "react";

const ToDo = () => {
    const [data, setData] = useState(new Map());
    useEffect(() => {
        getItem({ownerId: '64951adffcba99e086d4e9aa', searchVal: ''}, api)
        .then(dataMap => {
            console.log(dataMap);
            setData(dataMap);
        }).catch(err => {
            console.log(err);
        });
    },[]);

    const [isSearching, setIsSearching] = useState(false);
    const onSearch = (query) => {
        api.get('/task', {
            params: {
                ownerId: '64951adffcba99e086d4e9aa',
                searchVal: query
            }
        }).then(res => {
            setData(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    const [isAdding, setIsAdding] = useState(false);

    const onDone = (itemId) => {
        setData((prevData) => {
            const newData = new Map(prevData);
            newData.delete(itemId);
            return newData;
        });
        deleteItem(itemId, api);
    }

    return ( 
        <div className="w-1/3 bg-[#FEFFFF] px-5 py-3 rounded-md shadow h-full flex flex-col">
            <div className="flex justify-between items-bottom border-b border-gray-200 pb-2">
                <div className="text-dark font-extrabold text-2xl">Your Task(s)</div>
                <div className="flex justify-center items-bottom">
                    <div onClick={ () => {setIsSearching(!isSearching)} }
                    className="material-symbols-outlined cursor-pointer text-dark mr-2 hover:text-gray-500 text-3xl">search</div>
                    <div onClick={ () => {setIsAdding(!isAdding)}}
                    className="material-symbols-outlined cursor-pointer text-dark hover:text-gray-500 text-4xl">add</div>
                </div>
            </div>
            { isSearching && <SearchBar onSearch={ onSearch }/>}
            { !isAdding ? (
                <div className="py-2 h-fit overflow-y-scroll">
                    { Array.from(data.values()).map(item => (
                        <div className="border rounded-md px-3 flex justify-between items-center my-2" key={ item.id }>
                            <div>
                                <div className="text-dark font-bold text-lg cursor-pointer hover:underline hover:underline-offset-4">{ item.title }</div>
                                {/* tags */}
                                <div className="flex py-2 w-48 overflow-x-auto">
                                    { item.tags && item.tags.map((tag, i) => (
                                        <Tag name={ tag } key={ i }/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="material-symbols-outlined mr-5 text-dark cursor-pointer hover:text-gray-500">edit</div>
                                <ConfirmBtn name={ "Done" } handler={ onDone } id={ item.id }/>
                            </div>
                        </div>
                    ))}
                </div>
            ) : 
            (<AddForm ownerId={ '64951adffcba99e086d4e9aa' }/>) }
            
        </div>
     );
}
 
export default ToDo;