import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingThree() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton]=useState(1)

  const clickHandler= () =>{
    setIdFromButton(id)
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButton]);
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
      <button type="button" onClick={clickHandler}>Fetch</button>
      <div>{posts.title}</div>
    </div>
  );
}

export default DataFetchingThree;