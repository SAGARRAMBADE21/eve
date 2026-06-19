import { eveChannel } from "eve/channels/eve";
import { localDev, vercelOidc } from "eve/channels/auth";

// Built-in HTTP API channel. Exposes the REST routes for driving the agent:
//   GET  /eve/v1/health
//   POST /eve/v1/session                 — start a session
//   POST /eve/v1/session/:sessionId      — send a follow-up message
//   GET  /eve/v1/session/:sessionId/stream — stream NDJSON lifecycle events
//
// Auth: localDev() permits local requests during development; vercelOidc()
// trusts requests from Vercel infrastructure (OIDC).
//
// Docs: https://eve.dev/docs/channels/eve

export default eveChannel({
  auth: [localDev(), vercelOidc()],

  // Optional: inject context before the agent processes a message.
  // onMessage: async (msg) => msg,

  // Optional: observe specific stream events.
  // events: {
  //   "message.completed": (event) => {},
  // },
});
