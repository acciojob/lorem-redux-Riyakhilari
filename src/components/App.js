import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";
import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Lorem Redux</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
