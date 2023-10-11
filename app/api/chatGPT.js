import axios from "axios";

/* const API_KEY =  /* process.env.OPENAI_API_KEY; */
export async function chatWithGPT(userInput, API_KEY) {
  console.log("API Key:", API_KEY);
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: userInput,
        model: "text-davinci-003",
        max_tokens: 200,
        temperature: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    console.log("API Response:", response.data);

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Chat-GPT API error:", error);
    throw error;
  }
}
