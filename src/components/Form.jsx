import React, { Component, useState } from "react";

const Form = (props) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.submitForm(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={inputText}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
