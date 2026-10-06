const memo = document.getElementById('memo');

// ① 開いたとき：保存してあるメモと文字の大きさを読み出す
chrome.storage.local.get(['memo', 'size']).then((data) => {
  memo.value = data.memo || '';
  memo.style.fontSize = (data.size || '14') + 'px';  // 追加：オプションで選んだ大きさ
});

// ② 書くたびに：入力欄の中身を保存する
memo.addEventListener('input', () => {
  chrome.storage.local.set({ memo: memo.value });
});
