const titles = ['Lettering Jam', 'Calligraphy Jam', 'Letter Jam'];

let counter = 0;
window.setInterval(function(){
    document.getElementById("page-title").innerText = `${titles[counter % (titles.length)]} ${String.fromCodePoint(0x270D)}`;
    counter += 1;
}, 2000);

const letterer = document.getElementById('lname');
const log = document.getElementById('log');

letterer.addEventListener('change', updateValue, console.log(letterer));

function updateValue(e) {
  log.textContent = e.target.value;
}