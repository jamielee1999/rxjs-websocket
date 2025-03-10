import { webSocket } from 'rxjs/webSocket';

// 建立 Binance Websocket 連線
const binanceSocket$ = webSocket(
  'wss://stream.binance.com:9443/ws/btcusdt@trade'
);

// 訂閱即時價格
const subscription = binanceSocket$.subscribe({
  next: (data) => {
    console.log('📈 BTC/USDT 即時價格:', data.p);
  },
  error: (error) => {
    console.error('❌ Binance Websocket 連線錯誤:', error);
  },
  complete: () => {
    console.log('❌ Binance Websocket 連線關閉');
  },
});

// 關閉連線
setTimeout(() => {
  subscription.unsubscribe();
  console.log('❌ Binance Websocket 連線關閉');
}, 10000);
