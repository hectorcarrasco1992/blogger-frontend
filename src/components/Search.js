import React from 'react'
import PropsTypes from 'prop-types'

const Search=(props)=>{
    return (
        <div>

            
            <form className="ui form">
                    <div className="field">
                        <input 
                        onChange = {props.handleChange}
                        placeholder="search..."
                        type="text"
                        value={props.searchTerm}
                        />
                    </div>
                </form>
        </div>
    )
}

Search.propsTypes={
    handleChange:PropsTypes.func,
    searchTerm:PropsTypes.func
}

export default Search