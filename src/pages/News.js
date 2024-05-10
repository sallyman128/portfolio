import React, { useState } from 'react';
import { fetchOpenAIResponse } from '../services/openaiService';

const News = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const globalPrompt = "Whats the news in the world?"

  const handleGlobalNewsSubmit = async () => {
    try {
      setPrompt(globalPrompt)
      const data = await fetchOpenAIResponse(prompt);
      setResponse(data.choices[0].message.content);
    } catch (error) {
      setResponse('Error fetching response from OpenAI.');
    }
  };

  return (
    <div>
			<h1>Unbiased News</h1>
      <button onClick={handleGlobalNewsSubmit}>Get Global News</button>
      <h2>Response:</h2>
      <p>{response}</p>
    </div>
  );
};

export default News;
