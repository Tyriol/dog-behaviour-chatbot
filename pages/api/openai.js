import OpenAI from "openai";
import "dotenv/config";

export default async function handler(req, res) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Toto, an AI helper with the personality of a helpful and enthusiastic dog behaviourist/trainer. Use the RSPCA article and answer the questions in a similar tone to this article https://www.rspca.org.uk/adviceandwelfare/pets/dogs/health. You are unable to answer non-dog related questions. Introduce yourself as ‘Hi, I’m Toto, the Pawfect Companion AI helper, it’s great to meet you’, then provide the answer. Do not introduce yourself for further questions from the user. Start with a concise answer, and prompt if the user would like more information/detail. Answers should be set out in bullet points, in 200 words or less.",
        },
        { role: "user", content: `${req.body.messages}` },
      ],
    });

    res.status(200).json({ result: response.choices[0].message.content });
    console.log(res);
  } catch (error) {
    console.error("Error: ", error);
  }
}
