/**
 * Notification dispatcher for Guestbook submissions.
 * Sends instant alerts to Telegram Bot or Discord Webhook if configured in environment.
 */
export async function sendInstantNotification(payload: {
  name: string;
  role?: string;
  message: string;
  visibility: "public" | "private";
  email?: string;
}) {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  const visibilityIcon = payload.visibility === "public" ? "🌐 Public" : "🔒 Private";
  const notificationText = `🔔 [Chaow.dev] New Guestbook Message!\n\n` +
    `👤 Sender: ${payload.name} (${payload.role || "Visitor"})\n` +
    `🔒 Visibility: ${visibilityIcon}\n` +
    (payload.email ? `📧 Email: ${payload.email}\n` : "") +
    `💬 Message:\n"${payload.message}"\n\n` +
    `👉 Moderate at: https://chaow.dev/admin`;

  // 1. Send Telegram Notification
  if (telegramBotToken && telegramChatId) {
    try {
      await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: notificationText,
          parse_mode: "Markdown",
        }),
      });
    } catch (err) {
      console.warn("Telegram notification failed:", err);
    }
  }

  // 2. Send Discord Webhook Notification
  if (discordWebhookUrl) {
    try {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: notificationText,
          username: "Chaow.dev Portfolio Bot",
        }),
      });
    } catch (err) {
      console.warn("Discord webhook notification failed:", err);
    }
  }
}
