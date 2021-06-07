import React from 'react'
import './Artist.css'
function Artist(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <p className="card-text">
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default Artist
