// filename: openai.js
// file location: /pages/api/openai.js

import { Configuration, OpenAIApi } from "openai";
import defaultPrompts from "../../prompts/defaultPrompts";

// Create a configuration object with the OpenAI API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAIApi(configuration);

/**
 * Handle the API request
 * @param {object} req - The HTTP request object
 * @param {object} res - The HTTP response object
 */
export default async function (req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  // Check if the OpenAI API key is configured
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  // Extract the payload from the request body
  const payload = req.body.payload || "";
  console.log("The payload is: ", payload);

  // Check if the payload is empty
  if (payload.description.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid input",
      },
    });
    return;
  }

  const userMessages = req.body.userMessages || [];
  const assistantMessages = req.body.assistantMessages || [];

  try {
    // Create a user message object
    let filterMessage = `
    Create a ${payload.topic} that explores ${payload.description}. 
    It could be a personal experience, a social issue, an abstract concept, or a moment of inspiration. 
    Use your poetic voice to convey the emotions, imagery, and depth of meaning associated with your chosen topic.
    Experiment with different poetic forms, techniques, and styles to create a unique and expressive piece of art. 
    Let your imagination soar and your words flow freely as you craft a poem that reflects your thoughts, feelings, and perspective on your chosen subject
    
    `
    const userMessage = {
      role: "user",
      content: filterMessage,
    };

    // Combine default prompts, user messages, and assistant messages into an array of messages
    // Each message object has a 'role' (either "user" or "assistant") and 'content'
    // @param {array} defaultPrompts - Array of default prompts
    // @param {array} userMessages - Array of user messages
    // @param {array} assistantMessages - Array of assistant messages
    // @param {object} userMessage - User message object
    // @return {array} - Array of messages to be used in OpenAI API call
    const messages = [
      ...defaultPrompts,
      ...userMessages.map((content) => ({ role: "user", content })),
      ...assistantMessages.map((content) => ({ role: "assistant", content })),
      userMessage,
    ];

    // Call the OpenAI API to create a chat completion
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0,
      max_tokens: 510,
      top_p: 0,
    });

    // Return the generated content as the result
    res
      .status(200)
      .json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    if (error.response) {
      // If there's a response error, log and return the error message
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      // If there's an error with the OpenAI API request, log and return a generic error message
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
