import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loaderUser = useLoaderData();
  const [users, setUsers] = useState(loaderUser);

  function handelDeleteUser(id) {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const filterUser = users.filter((user) => user._id !== id);
          setUsers(filterUser);
        }
      });
  }

  return (
    <div>
      <h2>User: {users.length}</h2>

      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
          <Link to={`/users/${user._id}`}>Update</Link>
          <button onClick={() => handelDeleteUser(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
