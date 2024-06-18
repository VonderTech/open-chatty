import { useState } from 'react';

interface UseOpenAIResult {
  loading: boolean;
  error: string | null;
  response: string;
  sendPrompt: (prompt: string) => Promise<void>;
}

export const useOpenAI = (): UseOpenAIResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string>('');

  const sendPrompt = async (prompt: string) => {
    console.log('Sending prompt:', prompt);
    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from OpenAI');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = '';

      while (true) {
        const { done, value } = await reader?.read()!;
        if (done) break;
        result += decoder.decode(value, { stream: true });
        setResponse((prev) => prev + decoder.decode(value, { stream: true }));
      }

      setResponse(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, sendPrompt };
};
