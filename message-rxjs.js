import { webSocket } from 'rxjs/webSocket';

// 建立 postman-echo Websocket 連線
const ws$ = webSocket('wss://ws.postman-echo.com/raw');

// 訂閱即時訊息
const subscription = ws$.subscribe({
  next: (msg) => {
    console.log('📩 收到訊息:', msg);
  },
  error: (error) => {
    console.error('❌ WebSocket 錯誤:', error);
  },
  complete: () => {
    console.log('🔴 WebSocket 連線已關閉');
  },
});

// 發送訊息
ws$.next('Hello from RxJS WebSocket!');

setTimeout(() => {
  console.log('🔴 WebSocket 連線即將關閉');
  subscription.unsubscribe();
}, 5000);
