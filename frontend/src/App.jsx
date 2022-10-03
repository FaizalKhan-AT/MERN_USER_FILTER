import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import SearchBar from "./components/searchBar/SearchBar";
import axios from "./config";
function App() {
  const [users, setUsers] = useState([]);
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const users = await axios.get("/users");
      setUsers(users.data.data);
      setPerson(users.data.data);
      setLoading(false);
    } catch (err) {
      console.error("something went wrong ..");
    }
  };
  const handleSearch = async (key) => {
    if (key === "") {
      setPerson(users);
    } else {
      const person = users.filter((user) => user.firstName.includes(key));
      if (person.length === 1) {
        try {
          setLoading(true);
          const p = await axios.get(`/users/${person[0].firstName}`);
          setPerson(p.data.user);
          setLoading(false);
        } catch (err) {
          console.error("something went wrong ...");
        }
      }
    }
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <br />
      <br />
      <div className="row w-100 gap-2 justify-content-center">
        {loading ? (
          <h2 className="text-center text-white">Loading...</h2>
        ) : (
          person.length > 0 &&
          person.map((user) => {
            return <Card user={user} key={user._id} />;
          })
        )}
      </div>
    </>
  );
}

export default App;
