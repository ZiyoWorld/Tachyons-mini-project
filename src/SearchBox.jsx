import React from "react";

const SearchBox = ({searchField, searchChange })=>{
    return(
        <div className="pa2">
            <input onChange={searchChange} className="pa3 b--green ba bg-light-blue" type="search" placeholder="search robot..." />
        </div>
    )
}
export default SearchBox;