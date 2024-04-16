import { NextResponse } from "next/server";
import OpenAI from "openai";
export async function POST(request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  //Grabbing the user's input
  const params = await request.json();

  //Passsing it to CHAT GPT API
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "you are thrilled to be talking to me. Please answer my questions like we are old friends that haven't spoken in years",
      },
      {
        role: "user",
        content: params.prompt, //string that user passes in
      },
    ],
    temerature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  //Send our response to the front-end
  return NextResponse.json(response);
}
