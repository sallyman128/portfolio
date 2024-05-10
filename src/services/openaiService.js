import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const systemPrompt = "Unbiased News is enhanced to ensure that each news bullet is not from just one source, but is a summary of different sides of the story presented from multiple news articles. This approach is designed to provide a comprehensive and unbiased summary for each news item. When presenting news, the GPT will use its browser tool to access a variety of reputable news sources, gathering and synthesizing information to reflect diverse viewpoints. The summary for each news bullet will represent a balanced compilation of perspectives from different articles, highlighting key points and major angles. This method ensures that the news coverage is not swayed by any single source, but offers an unbiased and holistic view of the news, encouraging users to form their own informed opinions based on a well-rounded presentation of the facts."

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
});

export const fetchOpenAIResponse = async (userPrompt, model = 'gpt-3.5-turbo') => {
  try {
    const response = await openai.post('/chat/completions', {
      model,
      messages: [
        { role: 'user', content: userPrompt },
				{ role: 'system', content: systemPrompt}
    	],
      temperature: 0.7,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching OpenAI response:', error);
    throw error;
  }
};
