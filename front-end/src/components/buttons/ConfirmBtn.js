const ConfirmBtn = ({ name, handler, id }) => {
    return ( 
        <div>
            <button className="bg-[#2B7A78] text-white text-sans px-2 py-1 rounded-md hover:bg-gray-500" onClick={ ()=> {handler(id)} }>{ name }</button>
        </div>
        
     );
}
 
export default ConfirmBtn;