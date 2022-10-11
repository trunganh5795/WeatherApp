import React from 'react'

export default function StatusCard(props) {
    return (
        <div className='status-card'>
            <div className="status-card__title">
                <span>{props.title}</span>
            </div>
            {props.renderBody}
        </div>
    )
}
