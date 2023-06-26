const ActionBtn = ({name}) => {
    return ( 
        <div>
            <button className="bg-[#17252A] text-white text-sans px-2 py-1 rounded-md hover:bg-gray-500">{ name }</button>
        </div>
     );
}
 
export default ActionBtn;