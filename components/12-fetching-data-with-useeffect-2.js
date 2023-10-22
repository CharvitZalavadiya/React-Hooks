import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingTwo() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
        <label>Enter Id : </label>
      <input
        type="number"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <div>{posts.title}</div>
    </div>
  );
}

export default DataFetchingTwo;
