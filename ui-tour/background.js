// 入れたとき：右クリックのメニュー（コンテキストメニュー）に項目を足す
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'count',
    title: '選んだ文字を数える',
    contexts: ['selection']   // 文字を選んで右クリックしたときだけ出す
  });
});

// アイコンをクリックしたら、サイドパネルを開く
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

// メニューの項目がクリックされたら：数をバッジと通知で知らせる
chrome.contextMenus.onClicked.addListener((info) => {
  const n = info.selectionText.length;
  chrome.action.setBadgeText({ text: String(n) });           // バッジ
  chrome.notifications.create({                              // 通知
    type: 'basic',
    iconUrl: 'icon.png',
    title: 'UIの見本',
    message: `選んだ文字は ${n} 文字でした`
  });
});
