import React, { useState } from 'react';
import { fetchOpenAIResponse } from '../services/openaiService';

const News = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const data = await fetchOpenAIResponse(prompt);
      setResponse(data.choices[0].message.content);
    } catch (error) {
      setResponse('Error fetching response from OpenAI.');
    }
  };

  return (
    <div className="App">
      <h1>OpenAI Chatbot</h1>
      <textarea
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={handlePromptChange}
        rows="5"
        cols="60"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h2>Response:</h2>
      <p>{response}</p>
    </div>
  );
};

export default News;
