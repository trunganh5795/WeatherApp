import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { getWeather, getWeatherByName } from '../actions/getWeather'
import { useDispatch } from 'react-redux'
export default function SearchBar() {
    const dispatch = useDispatch();
    return (
        <div className="weather__search__location">
            <form className="input-group d-flex align-items-center">
                <FontAwesomeIcon icon={faSearch} />
                <input className="form-control" type="text" placeholder="Search for the place ..." id="inputSearch"
                onKeyDown={(e)=>{
                    // e.preventDefault();
                    if(e.key === "Enter"){
                        e.preventDefault();
                        dispatch(getWeatherByName(e.target.value))
                    }
                }}
                />
                <button className=" weather__search__location__btn-search d-md-inline-block" type="button" data-toggle="tooltips" data-placement="bottom" title="Use your location"
                    onClick={() => {
                        dispatch(getWeather);
                    }}
                >
                    <FontAwesomeIcon icon={faMapMarker} />
                </button>
                <div className="wrapper"
                    onClick={() => {
                        dispatch(getWeather);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.91 33.91" className="refresh-icon"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#0d7287;fill-rule:evenodd;}" }} /></defs><title>icon-refresh</title><g id="Layer_2" data-name="Layer 2"><g id="Image"><g id="side_nav" data-name="side nav"><path className="cls-1" d="M22.54,7a1,1,0,0,1,.78.55.92.92,0,0,1,.07.29q.05,1.67.1,3.35a1.29,1.29,0,0,1,0,.41.86.86,0,0,1-.5.53,1,1,0,0,1-.3.06l-3.44.1a1,1,0,0,1-.43-.1.84.84,0,0,1-.3-.26,1,1,0,0,1,0-1.12.86.86,0,0,1,.44-.29l.22,0h0l1,0-.32-.16a7.32,7.32,0,0,0-2-.62,7.2,7.2,0,0,0-3.49.31,7.11,7.11,0,0,0-2,1A6.93,6.93,0,0,0,9.8,17.94c0,.13.06.26.09.4a.54.54,0,0,1,0,.07,1.23,1.23,0,0,1-.08.43.9.9,0,0,1-.44.47.86.86,0,0,1-.24.08H9a1.33,1.33,0,0,1-.36,0,.89.89,0,0,1-.44-.29A1,1,0,0,1,8,18.77a2.41,2.41,0,0,1-.09-.37q-.06-.29-.1-.59A9.06,9.06,0,0,1,10.73,10l.34-.29a9.35,9.35,0,0,1,.9-.64A9,9,0,0,1,17.12,7.7,8,8,0,0,1,18,7.8a9,9,0,0,1,2.48.79,10.25,10.25,0,0,1,1.06.6l.06,0c0-.45,0-.91,0-1.36,0,0,0,0,0-.09a1,1,0,0,1,.09-.3.85.85,0,0,1,.5-.42,1,1,0,0,1,.26,0ZM16.7,25.6a8.82,8.82,0,0,0,4.46-1.22,9.56,9.56,0,0,0,1-.69l.47-.39L23,23q.28-.25.53-.52a8.12,8.12,0,0,0,1.67-2.75,8.94,8.94,0,0,0,.43-4.28q0-.23-.08-.46l0-.15a1.73,1.73,0,0,0,0-.2,1,1,0,0,0-.39-.52l-.18-.09a1.27,1.27,0,0,0-.33-.06h-.11a.84.84,0,0,0-.24.08,1,1,0,0,0-.21.14,1,1,0,0,0-.31.82v0a8.21,8.21,0,0,1,.17,1.21,7.46,7.46,0,0,1-.29,2.58A7,7,0,0,1,21,22.53a7.07,7.07,0,0,1-4.91,1.22,7.37,7.37,0,0,1-2.82-1l1.07-.1a.84.84,0,0,0,.49-.18,1,1,0,0,0,.38-.69.9.9,0,0,0,0-.39,1,1,0,0,0-1-.64c-1.14.1-2.27.26-3.42.3a.89.89,0,0,0-.3.08,1,1,0,0,0-.55,1l.3,3.39s0,.07,0,.11a.92.92,0,0,0,.19.45.9.9,0,0,0,1.06.24,1,1,0,0,0,.55-1l-.12-1.23a9.77,9.77,0,0,0,1.59.83,8.9,8.9,0,0,0,1.84.53,9,9,0,0,0,1,.11ZM17,0A17,17,0,1,1,0,17,17,17,0,0,1,17,0Z" /></g></g></g>e</svg>
                </div>

            </form>
        </div>
    )
}

