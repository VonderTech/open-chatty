'use client';
import React, { useState } from 'react';
import LoadingButton from '@/components/LoadButton';
import TextInput from '@/components/TextInput';
import { useOpenAI } from '../hooks/useOpenAI';

const PromptForm = () => {
  const [inputValue, setInputValue] = useState('Why do some fish fly?');

  //   const [response, setResponse] = useState('');
  //   const [loading, setLoading] = useState(false);
  const { loading, error, response, sendPrompt } = useOpenAI();

  const handleSend = async () => {
    sendPrompt(inputValue);
  };
  const handleClear = async () => {
    console.log('Clearing the prompt and response');
    setInputValue('');
  };
  return (
    <div className="flex flex-col justify-center flex-auto space-y-8">
      <TextInput
        prompt="Enter a prompt here"
        value={inputValue}
        onChange={(value) => setInputValue(value)}
      />

      <div className="flex flex-row items-start mt-4 space-x-4">
        <LoadingButton onClick={handleSend} isLoading={loading} />
        <button className="btn btn-secondary w-48" onClick={handleClear}>
          Clear
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div>{response}</div>
    </div>
  );
};

export default PromptForm;
