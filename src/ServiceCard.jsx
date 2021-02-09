import React from "react";
import { NavLink } from "react-router-dom";
import "./ServiceCard.css"
function ServiceCard(props) {

    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <NavLink to="/contact" className="btn btn-primary">
                            Contact
                    </NavLink>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ServiceCard;
