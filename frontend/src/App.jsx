import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import SubCard from "./components/card/SubCard";
import SearchBar from "./components/searchBar/SearchBar";
import axios from "./config";
function App() {
  const [users, setUsers] = useState([]);
  const [person, setPerson] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPerson, setIsPerson] = useState(true);

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
  const handleSearch = (key) => {
    if (key === "") {
      setPerson(users);
    } else {
      if (!Date.parse(key)) searchByUser(key);
      else setOrders(searchByDate(key));
    }
  };
  const searchByDate = async (key) => {
    setIsPerson(false);
    try {
      setLoading(true);
      const o = await axios.get(`/orders/${key}`);
      setOrders(o.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err, "---!!!");
    }
  };
  const searchByUser = async (key) => {
    setIsPerson(true);
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
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <br />
      <br />
      <div className="row w-100 gap-2 justify-content-center">
        {loading ? (
          <h2 className="text-center text-white">Loading...</h2>
        ) : isPerson ? (
          person.length > 0 &&
          person.map((user) => {
            return <Card user={user} key={user._id} />;
          })
        ) : orders.length > 0 ? (
          orders.map((order, idx) => {
            return (
              <div
                key={order.orderID + idx}
                className="row w-100 justify-content-center"
              >
                <div className="col-md-6">
                  <SubCard order={order} />
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center text-white">No orders found ...</h2>
        )}
      </div>
    </>
  );
}

export default App;
