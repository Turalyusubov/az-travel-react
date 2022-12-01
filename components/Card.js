import React from "react"

export default function Card(props) {
    return (
        <div className="card">
        <div className="img-section">
            <img src={`${props.imageUrl}`} />
        </div>
        <div className="card-body">
            <div className="body-top">
                <div className="country">
                    <img src="../images/loc.svg" />
                    <p>{props.location}</p>
                </div>
                <div className="map-link">
                    <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                </div>
            </div>
            <div className="card-title">
                <h2>{props.title}</h2>
            </div>
            <div className="body-bottom">
                <div className="date">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <div className="card-about">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
        </div>
    )
}