import React, { useState, useEffect } from "react";
import API from "../config/api";

const DeleteUsers = ({ users }) => {
  const [id, setId] = useState("");
  console.log(users);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userID = id;
    const response = await API.delete(`users/${userID}`);
    if (response.status === 200) alert("You have succesfully deleted the user");
    console.log(response);
    console.log(response.data);
  };
  return (
    <div>
      <h4>Delete users:</h4>
      <form onSubmit={handleSubmit}>
        <label>
          User id: <input type="text" onChange={handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteUsers;
