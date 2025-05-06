export const sendOrderToTelegram = async (order: {
  items: { name: string; quantity: number; price: number }[];
  total: number;
  tel: string;
  comment: string;
}) => {
  const message = `
Нове замовлення!
---------------------
${order.items
  .map(
    (item) =>
      `• ${item.name} x${item.quantity} = ${item.price * item.quantity}₴`
  )
  .join("\n")}
---------------------
Сума: ${order.total}₴
Коментар: ${order.comment || "—"}
Телефон:  ${order.tel || "—"}

`;

  await fetch("http://localhost:5000/send-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: order.items,
      message: message,
    }),
  });
  //   await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       chat_id: CHAT_ID,
  //       text: message,
  //     }),
  //   });
};
