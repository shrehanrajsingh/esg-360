import * as dotenv from "dotenv";
import { InferenceClient } from "@huggingface/inference";
import { ESG_CONTEXT } from "./context";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;
const inference = new InferenceClient(HF_ACCESS_TOKEN);

export default async function handler(req, res) {
  const { prompt } = req.body;

  const response = await inference.questionAnswering({
    model: "deepset/roberta-base-squad2",
    inputs: {
      context: ESG_CONTEXT,
      question: prompt,
    },
  });

  // const response = await fetch(
  //   "https://api-inference.huggingface.co/models/umarigan/llama-3.1-openhermes-tr",
  //   {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${HF_ACCESS_TOKEN}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       inputs: prompt,
  //     }),
  //   }
  // );

  res.status(200).json({
    text: response.answer,
  });
}
