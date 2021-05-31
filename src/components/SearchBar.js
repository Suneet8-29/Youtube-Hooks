import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {
    const [searchParameter, setSearchParameter] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchParameter);
    } 

    const onInputChange = (event) => {
          
        setSearchParameter(event.target.value);
    }

    return (
        <div className='ui segment'>
        <form onSubmit={onFormSubmit} className="ui form">
            <div className="field">
                <label>SuneetTube</label>
                <input onChange={onInputChange} type="text" name="Search" placeholder="Search..."/>
            </div>               
        </form>
        </div>
    )
}


export default SearchBar;
