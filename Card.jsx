import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={props.item.imageUrl} className="images-card" alt=""></img>
      </div>
      <div>
        <div className="location-details">
          <FontAwesomeIcon className="icon-color" icon={faLocationDot} />
          <span className="location">{props.item.location}</span>
          <span className="maps">
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <div className="card--stats">
          <h1 style={{ marginBottom: 0 }}>{props.item.title}</h1>
          <h4 style={{ margin: 0 }}>
            {props.item.startDate} - {props.item.endDate}
          </h4>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
