import { telegramChannel } from "eve/channels/telegram";

// Telegram channel — mounts at POST /eve/v1/telegram
//
// Required environment variables:
//   TELEGRAM_BOT_TOKEN            – replies, typing, callbacks, proactive sends
//   TELEGRAM_WEBHOOK_SECRET_TOKEN – must match your registered webhook secret
//
// (Alternatively pass these inline via `credentials: { botToken, webhookSecretToken }`.)
//
// Register the webhook once your app is reachable:
//   curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
//     -H "Content-Type: application/json" \
//     -d '{"url":"https://your-app.example.com/eve/v1/telegram",
//          "secret_token":"'"$TELEGRAM_WEBHOOK_SECRET_TOKEN"'",
//          "allowed_updates":["message","callback_query"]}'
//
// Docs: https://eve.dev/docs/channels/telegram

export default telegramChannel({
  botUsername: "my_bot",

  // Optional: allow file attachments (fetched on demand via getFile).
  // uploadPolicy: {
  //   allowedMediaTypes: ["image/*", "application/pdf"],
  //   maxBytes: 10 * 1024 * 1024,
  // },
});
