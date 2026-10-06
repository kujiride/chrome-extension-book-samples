const memo = document.getElementById('memo');
const clear = document.getElementById('clear');  // 追加：「全部消す」ボタン

// ① 開いたとき：保存してあるメモを読み出して、入力欄に入れる
chrome.storage.local.get('memo').then((data) => {
  memo.value = data.memo || '';
});

// ② 書くたびに：入力欄の中身を保存する
memo.addEventListener('input', () => {
  chrome.storage.local.set({ memo: memo.value });
});

// ③ 追加：ボタンをクリックしたら、入力欄を空にして、保存した中身も消す
clear.addEventListener('click', () => {
  memo.value = '';
  chrome.storage.local.remove('memo');
});
