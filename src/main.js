import React from "react"
import img1 from "./images/LaurBalaur.jpg"

export default function Main() {
    return (
        <div>
            <img className="img-edit"/>
            <div className="secondary">
                <h2 className="custom-name">Cibotari Laurentiu</h2>
                <h4 className="fe-dev">Frontend developer</h4>
                <h6 className="web-link">laurentiu.website</h6>
                <button className = "btn-edit">
                    <i className="fa fa-envelope"></i>
                    <span>Email</span>
                </button>
            </div>
        </div>
    )
}