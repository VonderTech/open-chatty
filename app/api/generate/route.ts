import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Handles the POST request to the API route.
 * @param req - The request object.
 * @returns The response from the API route.
 */
export async function POST(req: Request) {
  const { prompt } = await req.json();
  console.log('Received prompt:', prompt);
  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    maxTokens: 3000,
    prompt: prompt,
  });

  return result.toTextStreamResponse();
}
