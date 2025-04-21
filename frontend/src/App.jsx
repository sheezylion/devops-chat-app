// src/App.jsx
import { useEffect } from "react";
import API from "./api";

function App() {
  useEffect(() => {
    API.get("/")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return <h1>Hello Frontend!</h1>;
}

export default App;
