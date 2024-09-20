"use client";

import { useState } from "react";
import { getOpenAIResponse } from "../OpenAI";

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
    const response = await getOpenAIResponse(inputValue);
    // set state of aiResponse to the result
    setAiResponse(response);
    console.log(aiResponse);
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
