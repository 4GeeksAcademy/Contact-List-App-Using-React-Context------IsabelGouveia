import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  function formOnChange(e) {
    setNewContact({
      ...newContact,
      [e.target.id]: e.target.value
    });
  }

  return (
    <div className="container">
      <Link to="/contact" className="mb-3">
        <button className="btn btn-primary mb-2">Go back</button>
      </Link>
      <form onChange={formOnChange}>
        <div className="text-center mb-3">
          <h2>Add a new contact</h2>
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="fullNameHelp"
            placeholder="Full name"
            value={newContact.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={newContact.email}
            onChange={formOnChange} // Add the onChange attribute here
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            aria-describedby="phoneHelp"
            placeholder="Enter phone"
            value={newContact.phone}
            onChange={formOnChange} // Add the onChange attribute here
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            aria-describedby="addressHelp"
            placeholder="Enter address"
            value={newContact.address}
            onChange={formOnChange} // Add the onChange attribute here
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-3"
          onClick={() => {
            actions.addUser(newContact);
            setNewContact({
              name: "",
              email: "",
              address: "",
              phone: ""
            }); // Reset the form after adding the user
          }}
        >
          Save
        </button>
        <div className="form-check">
          <Link to="/contact" className="card-link">
            Or get back to contacts
          </Link>
        </div>
      </form>
    </div>
  );
};

