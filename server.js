import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

console.log('token from', process.env.TELEGRAM_BOT_TOKEN)

app.post('/send-order', async (req, res) => {
  
  const { items, message } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).send('Некоректні дані: items')
  }
  
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      }),
    });

    const data = await response.json();
    console.log('Telegram response:', data)

    if (!data.ok) {
      throw new Error(`Telegram error: ${ data.description }`)
    }
    res.status(200).send('Ok')
    
  } catch (error) {
    console.error('Помилка надсилання в Телеграм', error.message);
    res.status(500).send('Помилка надсилання')
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});