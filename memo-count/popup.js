const memo = document.getElementById('memo');
const count = document.getElementById('count');  // 追加：文字数を出す場所

// ① 開いたとき：保存してあるメモを読み出して、入力欄に入れる
chrome.storage.local.get('memo').then((data) => {
  memo.value = data.memo || '';
  count.textContent = memo.value.length + ' 文字';  // 追加
});

// ② 書くたびに：入力欄の中身を保存する
memo.addEventListener('input', () => {
  chrome.storage.local.set({ memo: memo.value });
  count.textContent = memo.value.length + ' 文字';  // 追加
});
