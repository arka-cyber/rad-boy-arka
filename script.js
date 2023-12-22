document.addEventListener('DOMContentLoaded', function() {
    var changeTextBtn = document.getElementById('changeTextBtn');
    var paragraph = document.querySelector('p');

    changeTextBtn.addEventListener('click', function() {
        paragraph.innerHTML = 'Text changed with JavaScript!';
    });
});
