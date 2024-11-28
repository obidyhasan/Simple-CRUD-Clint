const CreateUser = () => {
  function handelOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User Added successfully");
        }
        form.reset();
      });
  }

  return (
    <div>
      <form onSubmit={handelOnSubmit}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <br />
        <input type="text" placeholder="email" name="email" />
        <br />
        <br />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default CreateUser;
