import React, { useState, useEffect } from "react";
import API from "../config/api";
import DeleteUsers from "./DeleteUsers";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = API.get("users").then((res) => {
      console.log(res);
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  //   const removeUser = (id) => {
  //     const filteredUsers = users.filter(user)
  //   }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <DeleteUsers users={users} />
    </div>
  );
};

export default GetUsers;
