import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mb-3" style={{ maxWidth: "800px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img rounded-circle p-3"
            src="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp"
            alt="Card cap"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.contact.name}</h5>
            <p className="card-text">
              <i className="fas fa-map-marker-alt"></i> {props.contact.address}
            </p>
            <p className="card-text">
              <i className="fas fa-phone"></i> {props.contact.phone}
            </p>
            <p className="card-text">
              <i className="fas fa-envelope"></i> {props.contact.email}
            </p>
            <div className="d-flex justify-content-end">
              <Link to={"/updateUser/" + props.index}>
                <a
                  href="#"
                  onClick={() => props.onUpdate(props.index)}
                  className="fas fa-pencil-alt mx-3"
                  style={{ color: "black" }}
                ></a>
              </Link>
              <a href="#">
                <span
                  onClick={() => props.onDelete(props.index)}
                  className="fas fa-trash-alt"
                  style={{ color: "black" }}
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
  index: PropTypes.number,
  onDelete: PropTypes.func,
};



