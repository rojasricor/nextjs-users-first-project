async function getUser(id) {
  // fetch to reqres.in backend, get one user data
  const res = await fetch("https://reqres.in/api/users/".concat(id));
  const { data } = await res.json();
  return data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="bg-slate-500 text-black p-10 rounded-md m-5">
      <img
        className="rounded-full m-auto my-4"
        src={user.avatar}
        alt={user.first_name.concat(" avatar")}
      />
      <h3 className="font-bold text-2xl">
        {user.id}. {user.first_name} {user.last_name}
      </h3>
      <p className="text-sm">
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default UserPage;
