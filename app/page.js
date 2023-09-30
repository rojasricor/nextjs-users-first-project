import Users from "@/components/Users";

async function fetchUsers() {
  // fetch backend users reqres.in
  const response = await fetch("https://reqres.in/api/users");
  const { data } = await response.json();
  return data;
}

async function HomePage() {
  const users = await fetchUsers();

  return <Users users={users} />;
}

export default HomePage;
