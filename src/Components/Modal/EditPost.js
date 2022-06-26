import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const EditPost = (props) => {

  const [UpdatePost, setUpdatePost] = useState({
    id: props.id,
    name: props.name,
    contact: props.contact,
    contact: props.contact,


  });

  const closeModal = () => {
    props.rerender();
  };

  useEffect(() => {
    document.getElementById("updateText").innerHTML = props.original;
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;
    setUpdatePost({ ...UpdatePost, newMessage: value });
    console.log(UpdatePost);
  };

  const updatePost = (e) => {
    e.preventdefault();

    axios
      .post("http://localhost:8888/api/deletePosts.php", updatePost)
      .then((res) => {
        let data = res.data;
        console.log(data);
        props.upRender(true);
        props.rerender();
      });
  };

  return (
    <div className="modal">
      <form>
        <h1>Made a Mistake? Edit that shit!</h1>
        <p onClick={closeModal}>Close Modal</p>
        <textarea
          id="updateText"
          placeholder="Edit Post Message"
          onChange={handleChange}
        />
        <button type="submit">Edit this post</button>
      </form>
    </div>
  );
};

export default EditPost;
