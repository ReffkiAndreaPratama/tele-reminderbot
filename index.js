const TelegramBot = require('node-telegram-bot-api');

// GANTI token ini dengan token dari BotFather
const TOKEN = 'token';

const bot = new TelegramBot(TOKEN, { polling: true });

// Simpan reminder di memory
const reminders = [];

console.log('🤖 Bot berjalan...');

// Command: /add <pesan> <HH:MM>
bot.onText(/\/add (.+) (\d{2}:\d{2})/, (msg, match) => {
  const chatId = msg.chat.id;
  const message = match[1];
  const time = match[2];

  const [hour, minute] = time.split(':').map(Number);
  const now = new Date();
  const remindTime = new Date();

  remindTime.setHours(hour, minute, 0);

  // Kalau jam sudah lewat, kirim besok
  if (remindTime < now) {
    remindTime.setDate(remindTime.getDate() + 1);
  }

  const delay = remindTime - now;

  setTimeout(() => {
    bot.sendMessage(chatId, `⏰ Reminder: ${message}`);
  }, delay);

  reminders.push({ message, time });

  bot.sendMessage(chatId, `✅ Reminder disimpan jam ${time}`);
});

// Command: /list
bot.onText(/\/list/, (msg) => {
  const chatId = msg.chat.id;

  if (reminders.length === 0) {
    return bot.sendMessage(chatId, '📭 Belum ada reminder');
  }

  const list = reminders
    .map((r, i) => `${i + 1}. ${r.message} (${r.time})`)
    .join('\n');

  bot.sendMessage(chatId, `📋 Reminder kamu:\n${list}`);
});
