import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
});

export const fetchOpenAIResponse = async (prompt, model = 'gpt-3.5-turbo') => {
  try {
    console.log("here")
    console.log(apiKey)
    const response = await openai.post('/chat/completions', {
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching OpenAI response:', error);
    throw error;
  }
};
