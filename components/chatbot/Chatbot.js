"use client";

import { Messages } from "openai/resources/beta/threads/messages";
import { useState } from "react";

export default function Chatbot() {
  // create a useState to store the input value
  const [inputValue, setInputValue] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // create a function to retrive the input value
  function handleChange(e) {
    console.log("e.target.value:", e.target.value);
    setInputValue(e.target.value);
  }

  // create a function to submit the input value
  async function handleSubmit(e) {
    e.preventDefault();
    // call AI request function and save to variable
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: "what's the weather like today?" }),
    });
    const data = await response.json();
    console.log(data.result);
  }

  return (
    <div className="chatbot-container">
      <section className="chatbot-response">
        <p>{aiResponse}</p>
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
