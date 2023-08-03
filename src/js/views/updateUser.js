import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const UpdateUser = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams(); // Get the user ID from the URL parameter

  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  useEffect(() => {
    // Find the user by ID in the store and set the initial state for the form
    const user = store.users.find((user, index) => index.toString() === id);
    if (user) {
      setUpdatedUser(user);
    }
  }, [store.users, id]);

  function formOnChange(e) {
    setUpdatedUser({
      ...updatedUser,
      [e.target.id]: e.target.value
    });
  }

  return (
    <div className="container">
      <Link to="/contact">
        <button className="btn btn-primary">Go back</button>
      </Link>
      <form>
        <div className="text-center">
          <h2>Edit contact</h2>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name" className="mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="fullNameHelp"
            placeholder="Full name"
            value={updatedUser.name}
            onChange={formOnChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={updatedUser.email}
            onChange={formOnChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone" className="mb-2">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            aria-describedby="phoneHelp"
            placeholder="Enter phone"
            value={updatedUser.phone}
            onChange={formOnChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="address" className="mb-2">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            aria-describedby="addressHelp"
            placeholder="Enter address"
            value={updatedUser.address}
            onChange={formOnChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            actions.updateUser(parseInt(id), updatedUser);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};


