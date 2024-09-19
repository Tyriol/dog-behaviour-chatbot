"use client";

import { useState } from "react";

export default function Chatbot() {
  // create a useState to store the input value
  const [inputValue, setInputValue] = useState("");

  // create a function to retrive the input value
  function handleChange(e) {
    console.log("e.target.value:", e.target.value);
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("InputValue:", inputValue);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          How can we help?
          <input type="text" onChange={(e) => handleChange(e)} />
        </label>
        <button type="submit">submit</button>
      </form>
      <section className="response-display">
        <p></p>
      </section>
    </div>
  );
}
