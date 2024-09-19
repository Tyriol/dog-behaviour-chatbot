import OpenAI from "openai";

// Initialize the OpenAI API with your key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Fetch data from the OpenAI API
const messages = [
  {
    role: "system",
    content: "You are a helpful general knowledge expert.",
  },
  {
    role: "user",
    content: "Who is the president of the United States?",
  },
];

try {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages,
    // temperature: 1,
  });
  console.log(response.choices[0]);
} catch (error) {
  console.error("Error: ", error);
}
