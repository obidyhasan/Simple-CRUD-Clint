import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();

  function handelOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    console.log(updateUser);

    fetch(`http://localhost:5000/user/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Update Successfully");
        }
      });
  }

  return (
    <div>
      <h2>Update to : {user.name} </h2>

      <form onSubmit={handelOnSubmit}>
        <input
          type="text"
          defaultValue={user.name}
          placeholder="name"
          name="name"
        />
        <br />
        <br />
        <input
          type="text"
          defaultValue={user.email}
          placeholder="email"
          name="email"
        />
        <br />
        <br />
        <button>Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
