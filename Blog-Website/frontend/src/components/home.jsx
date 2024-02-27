import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const [list, setList] = useState([]);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  async function handleEdit(item) {
    console.log(item);
    navigate("/add",{state : {item}});
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/delete/${id}`);
      fetchBlog();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  async function fetchBlog() {
    setPending(true);
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      const result = await response.data;
      console.log(result);
      if (result && result.list && result.list.length) {
        setList(result.list);
      } else {
        setList([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="homeContainer">
      <h2 className="thoughts">Your Thoughts:</h2>
      {pending ? <h3>Loading....Please Wait</h3> : null}
      {list.length > 0 ? (
        list.map((item) => (
          <div className="blog" key={item._id}>
            <h3 className="home-title">{item.title}</h3>
            <p>{item.description}</p>
            <div className="icons">
              <FaEdit
                onClick={() => handleEdit(item)}
                className="edit"
              />
              <FaTrash
                className="delete"
                onClick={() => handleDelete(item._id)}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="no-blogs">No blogs found</p>
      )}
    </div>
  );
}

export default Home;
