// test.js

document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('loadingText');
    const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

    function showNextLetter(index) {
        if (index < letters.length) {
            text.innerHTML += letters[index];
            setTimeout(() => showNextLetter(index + 1), 200);
        }
    }

    showNextLetter(0);
});
