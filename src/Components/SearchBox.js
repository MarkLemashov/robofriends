import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className="tc" >
            <input className='pa3 ba b--green bg-lightest-blue' type="searchBox" placeholder="Search.." name="search" onChange={onSearchChange} />
        </div>
    );
}

export default SearchBox;