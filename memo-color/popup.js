const memo = document.getElementById('memo');

// ① 開いたとき：保存してあるメモを読み出して、入力欄に入れる
chrome.storage.local.get('memo').then((data) => {
  memo.value = data.memo || '';
});

// ② 書くたびに：入力欄の中身を保存する
memo.addEventListener('input', () => {
  chrome.storage.local.set({ memo: memo.value });
});
