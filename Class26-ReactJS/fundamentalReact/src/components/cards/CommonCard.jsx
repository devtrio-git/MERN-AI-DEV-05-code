import React from 'react'

const CommonCard = ({title, description}) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>

    )
}

export default CommonCard
