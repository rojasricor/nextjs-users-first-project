import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`users/${user.id}`}>
          <li className="bg-slate-500 text-black flex justify-between m-5 p-4 hover:bg-slate-600 rounded-md">
            <div>
              <h5 className="font-bold text-2xl">
                {user.first_name} {user.last_name}
              </h5>
              <p className="text-sm text-gray-900">
                <b>Email:</b> {user.email}
              </p>
            </div>
            <img
              className="rounded-full w-20 mx-3"
              src={user.avatar}
              alt={user.first_name.concat(" avatar")}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
