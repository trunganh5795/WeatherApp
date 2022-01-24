import React from 'react'
import { IconContext } from "react-icons";
import { WiThermometer } from 'react-icons/wi'
import moment from 'moment'
import { useSelector } from 'react-redux';
export default function MainStatus(props) {
    const time = moment.unix(props.time);
    const msg = useSelector(state => state.weatherDataReducer.msg)
    return (
        <div className="main__status">
            <div>
                {console.log(props.time)}
                <div className="main__status__icon">
                    <img src={props.img} alt="" />
                </div>
                <p className="main__status__temperature">{msg || props.temp_c?.toString()} <sup>°C</sup>
                    <IconContext.Provider value={{ className: `${props.temp_c > 30 ? "danger__color" : "normal__color"}` }}>
                        <WiThermometer />
                    </IconContext.Provider>
                </p>
                <p className="main__status__time">{time.format('dddd')}, <span>{time.format('h:mm a')}</span>  </p>
                <div className="main__status__state">
                    <div className="feature__state">
                        <img src={props.img} alt="" />
                        <span>{props.status}</span>
                    </div>
                </div>
            </div>
            <div className="main__status__city">
                <p>{props.city || ""}</p>
            </div>
        </div>
    )
}
