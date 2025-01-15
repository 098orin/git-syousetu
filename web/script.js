const editor = document.getElementById('editor');
const verticalButton = document.getElementById('verticalButton');

verticalButton.addEventListener('click', () => {
    editor.classList.toggle('vertical'); // 縦書きクラスをトグル
    verticalButton.textContent = editor.classList.contains('vertical') ? '横書き' : '縦書き'; // ボタンのテキストを切替
});