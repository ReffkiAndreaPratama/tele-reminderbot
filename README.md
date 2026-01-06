🤖 Telegram Reminder Bot

Bot Telegram sederhana untuk mengatur pengingat (reminder) otomatis menggunakan perintah chat.
Cocok untuk belajar Bot Telegram, Node.js, dan automation sederhana.

🚀 Fitur Utama

⏰ Set reminder dengan waktu tertentu

📝 Pesan reminder custom

🔁 Bisa banyak reminder

💬 Interaksi via command Telegram

💾 Data tersimpan lokal (tanpa database berat)

100% GRATIS & ringan

🛠️ Teknologi yang Digunakan

Node.js

node-telegram-bot-api

node-cron

dotenv

JSON file storage (local)

📂 Struktur Folder
telegram-reminder-bot/
│
├── data/
│   └── reminders.json
│
├── bot.js
├── package.json
├── .env
└── README.md

⚙️ Instalasi & Setup
1️⃣ Clone Repository
git clone https://github.com/username/telegram-reminder-bot.git
cd telegram-reminder-bot

2️⃣ Install Dependency
npm install

3️⃣ Buat Bot Telegram

Buka Telegram

Cari @BotFather

Jalankan:

/start
/newbot


Simpan BOT TOKEN

4️⃣ Setup Environment

Buat file .env

BOT_TOKEN=ISI_TOKEN_DARI_BOTFATHER

5️⃣ Jalankan Bot
node bot.js


Jika berhasil:

🤖 Bot is running...

📌 Cara Menggunakan Bot
➕ Set Reminder
/remind 2026-01-10 08:00 Bangun pagi!

📋 Lihat Semua Reminder
/list

❌ Hapus Reminder
/delete 1

🧠 Contoh Use Case

Pengingat belajar

Reminder minum obat

Notifikasi tugas

Alarm kerja sederhana

🔒 Catatan Keamanan

Jangan upload file .env ke GitHub

Gunakan .gitignore

📈 Cocok Untuk Portofolio

Project ini menunjukkan:

Pemahaman async JavaScript

Integrasi API Telegram

Automation & scheduling

Struktur project backend

🧩 Pengembangan Lanjutan (Opsional)

Reminder berulang

Timezone support

Database SQLite

Inline button

Deploy ke VPS / Railway

👨‍💻 Author

Tama
Fullstack Web Developer
🇮🇩 Indonesia
