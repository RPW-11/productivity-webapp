import { useState } from "react";
const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleInputChange = (event) => {
        const query = event.target.value;
        console.log(query);
        setSearchQuery(event.target.value);
        onSearch(query);
    };
    return ( 
        <div className="pt-5">
            <input type="text" placeholder="Search task or tags" 
            value={ searchQuery } onChange={ handleInputChange }
            className="w-full border border rounded-full h-[40px] px-3 outline-none text-gray-500 focus:text-dark focus:border-dark"/>
        </div>
     );
}
 
export default SearchBar;