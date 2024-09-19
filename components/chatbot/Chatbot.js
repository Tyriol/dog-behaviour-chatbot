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
      <section className="chatbot-response">
        <p>RESPONSE</p>
      </section>
      <section className="chatbot-request">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="prompt">How can I help?</label>
          <input id="prompt" type="text" onChange={(e) => handleChange(e)} />
          <button type="submit">submit</button>
        </form>
      </section>
    </div>
  );
}
