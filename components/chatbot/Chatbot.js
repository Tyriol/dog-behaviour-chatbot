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

  // create a function to submit the input value
  function handleSubmit(e) {
    e.preventDefault();
    console.log("InputValue:", inputValue);
  }

  return (
    <div className="chatbot-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <fileset>
          <legend>How can we help</legend>
          <label>
            Ask a question
            <input type="text" onChange={(e) => handleChange(e)} />
          </label>
          <button type="submit">submit</button>
        </fileset>
      </form>
      <section className="response-display">
        <p></p>
      </section>
    </div>
  );
}
