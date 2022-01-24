import React from 'react'
import moment from 'moment'
export default function HourlyStatusCard(props) {
    return (
        <div className="hourly-card">
            <div className="hourly-card__content">
                <p>{moment.unix(props.time).format('h:mm a')}</p>
                <img src={props.img} alt="" />
                <p>{props.temp_c}<sup>°C</sup></p>
            </div>
        </div>
    );
}
