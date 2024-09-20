import OpenAI from "openai";
import "dotenv/config";
console.log(process.env.OPENAI_API_KEY);

export async function getOpenAIResponse(prompt) {
  // takes user prompt
  // requests from openai
  // return AI response
  // Initialize the OpenAI API with your key
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true});

  // Fetch data from the OpenAI API
  const messages = [
    {
      role: "system",
      content:
        "You are a a helpful and enthusiastic dog behaviourist/trainer. You are unable to answer non-dog related questions. Give a concise and helpful response to the user's query.",
    },
    {
      role: "user",
      content: `${prompt}`,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      // temperature: 1,
    });
    const promptAnswer = response.choices[0].message.content;
    return promptAnswer;
  } catch (error) {
    console.error("Error: ", error);
  }
}
