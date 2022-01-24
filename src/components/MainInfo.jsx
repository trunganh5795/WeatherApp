import React from 'react'
import SearchBar from './SearchBar'
import MainStatus from './MainStatus'

export default function MainInfo(props) {
    return (
        <div className="main__info">
            {/* <Autocomplete2 /> */}
            <SearchBar />
            <MainStatus {...props} />

        </div>
    )
}
