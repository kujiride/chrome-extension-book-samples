const size = document.getElementById('size');
const saved = document.getElementById('saved');

// 開いたとき：保存してある大きさを選んでおく
chrome.storage.local.get('size').then((data) => {
  size.value = data.size || '14';
});

// 選び直したら保存する
size.addEventListener('change', () => {
  chrome.storage.local.set({ size: size.value });
  saved.textContent = '保存しました';
});
