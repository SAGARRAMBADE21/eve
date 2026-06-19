import { openai } from "@ai-sdk/openai";
import { defineAgent } from "eve";

// Root agent runtime configuration.
// Calls OpenAI directly via the AI SDK provider, authenticated with OPENAI_API_KEY.
export default defineAgent({
  model: openai("gpt-5"),
});
