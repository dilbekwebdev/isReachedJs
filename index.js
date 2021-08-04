let cash = prompt("Alisher necha puling bor(so'm), so'yla !");
let firstPay = 500*9433.34;
let secondPay = 250*9433.34;
let thirdPay = 120* 10354.03;
alert(`Borish-kelish samolyot bileti - $500 = ${firstPay} so'm
Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250 = ${secondPay} so'm
Muzey va ko’ngilochar joylar uchun - 120 yevro = ${thirdPay} so'm`)

let isReached = cash > (firstPay + secondPay + thirdPay);
let result = isReached ? "Oq yo’l, Alisher!" : "Alisher, ozgina sabr qilish kerak bo’lar ekan.";
alert(result)