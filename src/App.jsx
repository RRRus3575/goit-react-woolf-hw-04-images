import React, { Component, useEffect, useState } from "react";

import "./App.css";
import Button from "./components/Button";
import getAPI from "./components/API";
import Render from "./components/renderElements";
import Modal from "./components/modal";
import Form from "./components/Form";
import Loader from "./components/Loader";

export const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [imgLarge, setImgLarge] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const submitForm = (text) => {
    setSearch(text);
    setData([]);
    setPage(1);
    setTotalPages(1);
  };

  const buttonClick = () => {
    setPage((prev) => ({
      page: prev + 1,
    }));
  };

  const itemClick = (e) => {
    setImgLarge(e.target.getAttribute("srcSet"));
    setIsActive(true);
  };

  const modalToggle = () => {
    setIsActive((prev) => ({ isActive: !prev }));
  };

  useEffect(() => {
    async function APIget() {
      try {
        setLoading(true);

        const data = await getAPI(search, page);
        console.log(data.hits);
        if (data.hits.length < 1) {
          setIsEmpty(true);
        }
        setData((prev) => ({ data: [...prev, ...data.hits] }));
        setTotalPages(Math.ceil(data.totalHits / 12));
        setIsEmpty(false);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }
    if (search.length > 0) {
      APIget();
    }
  }, [search, page]);

  return (
    <div className="container">
      <Form submitForm={submitForm} />

      {isActive && <Modal img={imgLarge} modalToggle={modalToggle} />}

      {isEmpty && (
        <p className="notification">
          Nothing was found for this query, please try entering a different
          value😞
        </p>
      )}
      {data.length !== 0 && <Render data={data} click={itemClick} />}
      {loading && <Loader />}
      {data.length > 0 && totalPages > page && <Button click={buttonClick} />}
    </div>
  );
};

export default App;