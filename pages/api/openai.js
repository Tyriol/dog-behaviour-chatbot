import OpenAI from "openai";
import "dotenv/config";
// console.log(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    // dangerouslyAllowBrowser: true
  });
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful and enthusiastic dog behaviourist/trainer. You are unable to answer non-dog related questions. Give a concise and helpful response to the user's query.",
        },
        { role: "user", content: `${req.body.messages}` },
      ],
    });

    res.status(200).json({ result: response.choices[0].message.content });
    console.log(res);
    // const promptAnswer = response.choices[0].message.content;
    // return promptAnswer;
  } catch (error) {
    console.error("Error: ", error);
  }
}
