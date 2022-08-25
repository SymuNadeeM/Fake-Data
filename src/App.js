import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      setloading(true);
      await axios
        .get("http://localhost:4000/personal")
        .then((res) => {
          setloading(false);
          setdata(res);
        })
        .catch((err) => {
          setloading(false);
          seterror(err.name);
        });
    };

    getdata();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }
  if (error != null) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div>
        {data?.data?.map((xdata) => (
          <>
            <p>{xdata.username}</p>
            <p>{xdata.email}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
