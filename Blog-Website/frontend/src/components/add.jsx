import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Add() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);

  async function handleAddingBlog() {
    try {
      if (location.state && location.state.item) {
        const { item } = location.state;
        setIsEdit(true);
        await axios.put(
          `http://localhost:5000/api/blogs/update/${item._id}`,
          data
        );
      } else {
        setIsEdit(false)
        await axios.post("http://localhost:5000/api/blogs/add", data);
      }
      setData({
        title: "",
        description: "",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (location.state && location.state.item) {
      const { item } = location.state;
      setIsEdit(true);
      setData({
        title: item.title,
        description: item.description,
      });
    }
  }, [location]);

  useEffect(() => {
    console.log("IsEdit:", isEdit);
  }, [isEdit]);

  return (
    <div className="mainContainer">
      <div className="add-container">
        <h2>{isEdit ? "Edit a Blog:" : "Add your Thoughts:"}</h2>
        <div className="form">
          <input
            className="title"
            name="Title"
            placeholder="Give your thought's a Title"
            id="title"
            type="text"
            value={data.title}
            onChange={(e) =>
              setData({
                ...data,
                title: e.target.value,
              })
            }
          />
          <textarea
            className="description"
            name="Description"
            placeholder="Write your thoughts"
            id="description"
            value={data.description}
            onChange={(event) =>
              setData({
                ...data,
                description: event.target.value,
              })
            }
          />
          <input
            className="btn"
            type="submit"
            value="Submit"
            onClick={handleAddingBlog}
          />
        </div>
      </div>
    </div>
  );
}

export default Add;
