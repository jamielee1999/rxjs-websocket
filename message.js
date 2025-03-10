const ws = new WebSocket('wss://ws.postman-echo.com/raw');

ws.onopen = () => {
  console.log('✅ WebSocket 連線成功');
  ws.send('Hello WebSocket!');
};

ws.onmessage = (event) => {
  console.log('📩 收到訊息:', event.data);
};

ws.onerror = (error) => {
  console.error('❌ WebSocket 錯誤:', error);
};

ws.onclose = () => {
  console.log('🔴 WebSocket 連線已關閉');
};

// 關閉連線
ws.close();

// setTimeout(() => {
//   ws.close()
// }, 5000)
