import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import SearchBar from "./components/searchBar/SearchBar";
import axios from "./config";
function App() {
  const [users, setUsers] = useState([]);
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const users = await axios.get("/users");
      setUsers(users.data.data);
      setPerson(users.data.data);
    } catch (err) {
      console.error("something went wrong ..");
    }
  };
  const handleSearch = async (key) => {
    if (key === "") {
      setPerson(users);
    } else {
      const person = users.filter((user) => user.firstName.includes(key));
      /* no need to add additional network call it can be filtered on the frontend itself (adding network call for demo purposes)*/
      if (person.length === 1) {
        try {
          const p = await axios.get(`/users/${person[0].firstName}`);
          setPerson(p.data.user);
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
        {person.length > 0 ? (
          person.map((user) => {
            return <Card user={user} key={user._id} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}

export default App;
