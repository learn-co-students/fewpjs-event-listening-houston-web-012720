const input = document.querySelector('input');
const s = document.querySelector('.main')

function addingEventListener() {
  input.addEventListener('click', function(event) {
    s.innerText = s.innerText + "!"
  });
}