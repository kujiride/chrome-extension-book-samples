// アイコンが押されたら、そのタブの背景を青にする（もう一度押すと戻す）
chrome.action.onClicked.addListener(async (tab) => {
  const now = await chrome.action.getBadgeText({ tabId: tab.id });
  const next = now === "ON" ? "OFF" : "ON";
  await chrome.action.setBadgeText({ tabId: tab.id, text: next });
  const css = "body { background-color: #8fb5d1 !important; }";
  if (next === "ON") {
    await chrome.scripting.insertCSS({ target: { tabId: tab.id }, css });
  } else {
    await chrome.scripting.removeCSS({ target: { tabId: tab.id }, css });
  }
});
