import { useState } from "react";
import SelectTag from "../../input/SelectTag";
import ConfirmBtn from "../../buttons/ConfirmBtn";

const AddForm = ({ownerId}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: [],
        ownerId: ownerId
    })

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // process data

        // post

    };
    return ( 
        <div className="py-3">
            <div className="text-dark font-bold text-[16px] py-2">Add your task here.</div>
            <input type="text" placeholder="Title" className="outline-none border rounded-md focus:border-dark py-1 px-2 w-full mb-2"/>
            <input type="text" placeholder="Description" className="outline-none border rounded-md focus:border-dark py-1 px-2 w-full mb-2"/>
            <SelectTag ownerId={ ownerId }/>
            <div className="flex w-full justify-end py-2"><ConfirmBtn name={ "Add Task" }/></div>
        </div>
     );
}
 
export default AddForm;