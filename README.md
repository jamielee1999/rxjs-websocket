# WebSocket 應用示例集

這個專案展示了使用 WebSocket 的兩個主要應用：即時聊天室和比特幣價格查詢。

## 1. 即時聊天室

### 功能特點
- 使用 RxJS WebSocket 實現即時通訊
- 單一聊天室支援多人對話
- 訊息即時顯示與自動捲動
- 支援 Enter 快速發送訊息
- 連線狀態即時顯示
- 可手動關閉 WebSocket 連線

### 使用方法
1. 直接在瀏覽器中打開 `chat.html`
2. 在上方輸入框輸入使用者 1 的訊息
3. 在下方輸入框輸入使用者 2 的訊息
4. 可透過以下方式發送訊息：
   - 點擊「發送」按鈕
   - 按下 Enter 鍵

## 2. 比特幣即時價格查詢

### 功能特點
- 連接幣安（Binance）WebSocket API
- 即時獲取 BTC/USDT 交易對價格
- 提供兩種實現方式：
  - 原生 WebSocket API (`fetch-price.js`)
  - RxJS WebSocket (`fetch-price-rxjs.js`)
- 自動關閉連線機制

## 技術架構

- RxJS WebSocket
- HTML5 WebSocket API
- ES6+ JavaScript
- 純 CSS 樣式設計

## WebSocket 服務

本專案使用兩個 WebSocket 服務：

1. 聊天室（Postman Echo）：
- URL: `wss://ws.postman-echo.com/raw`
- 特性：Echo 服務，會將收到的訊息回傳
- 限制：僅供測試使用

2. 比特幣價格（Binance）：
- URL: `wss://stream.binance.com:9443/ws/btcusdt@trade`
- 特性：提供即時交易資訊
- 格式：JSON 格式的價格數據


## 未來優化方向

### 聊天室
- 加入使用者名稱設定
- 實現多房間功能
- 加入訊息時間戳記
- 支援圖片和檔案傳送

### 價格查詢
- 加入更多交易對支援
- 實現價格走勢圖表
- 加入價格提醒功能
- 支援自定義更新頻率