import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard";
import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <ul>
        {store.users.map((user, index) => (
          <ContactCard
            key={index}
            index={index}
            contact={user}
            onDelete={actions.deleteUser}
            onUpdate={() => actions.history.push(`/updateUser/${index}`)} // Redirect to the updateUser view with the user ID
          />
        ))}
      </ul>
    </div>
  );
};



