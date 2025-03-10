// 比特幣即時價格
const binanceSocket = new WebSocket(
  'wss://stream.binance.com:9443/ws/btcusdt@trade'
);

binanceSocket.onopen = () => {
  console.log('✅ Binance Websocket 連線成功');
};

binanceSocket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('📈 BTC/USDT 即時價格:', data.p);
};

binanceSocket.onerror = (error) => {
  console.error('❌ Binance Websocket 連線錯誤:', error);
};

binanceSocket.onclose = () => {
  console.log('❌ Binance Websocket 連線關閉');
};

// 關閉連線
binanceSocket.close();
