import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookInfo = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);

  return <div>
      {inputs && (
      <>
      <img src={inputs.image} alt={inputs.name} />
      <h1>{inputs.name}</h1>
      <h3>{inputs.author}</h3>
      <h3>{inputs.department}</h3>
      <p>{inputs.description}</p></>)}</div>;
};

export default BookInfo;
