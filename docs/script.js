const inputText = document.querySelector('input[type="text"]');
const letterers = document.getElementById("letterers");
const letterersElements = document.querySelector('.letterers-element');
const roll =  document.getElementById('roll');
const titles = ['Lettering Jam', 'Calligraphy Jam', 'Letter Jam', 'TypeLab Jam'];
const words = [ "wear",  "couple",  "feed",  "occupy",  "lie",  "convey",  "locate",  "hold",  "owe",  "cut",  "count",  "double",  "check",  "assign",  "boost",  "appreciate",  "reckon",  "taste",  "employ",  "convict",  "plead",  "widen",  "plant",  "dig",  "prepare",  "decorate",  "descend",  "bind",  "advise",  "behave",  "drown",  "divert",  "create",  "differ",  "condemn",  "creep",  "strike",  "characterise",  "argue",  "describe",  "issue",  "offer",  "bid",  "fine",  "spend",  "start",  "term",  "alter",  "order",  "suffer",];
const emotions = [ "Sad",  "Happy",  "Naive",  "Serious",  "Scared",  "Angry",  "Hungry",  "Satisfied",  "Excited",  "Focused",  "Confident",  "Lucky",];

let counter = 0;
setInterval(changeTitle, 2000);
function changeTitle() {
    const title = document.getElementById("page-title");
    const randomTitle = `${titles[counter % (titles.length)]} ${String.fromCodePoint(0x270D)}`;
    title.textContent = randomTitle;
    title.ariaLabel = randomTitle;
    counter += 1;
}

inputText.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
});

roll.addEventListener('click', updateValue);
function updateValue(e) {
    e.preventDefault();
    if (inputText.value) {
        const lettererElement = document.createElement("DIV");
        lettererElement.className = 'letterers-element';
        const lettererElementChild = document.createElement("P");
        lettererElementChild.className = 'letterers-element-child';
        lettererElementChild.innerText = inputText.value;
        lettererElement.appendChild(lettererElementChild);
        lettererElement.appendChild(elementArray(words));
        lettererElement.appendChild(elementArray(emotions));
        letterers.appendChild(lettererElement);
        inputText.value = null;
    } else {
        alert('Capture the letterer\'s name');
    }
}

function elementArray(arr) {
    const lettererElementChild = document.createElement("P");
    lettererElementChild.className = 'letterers-element-child';
    const txt = arr[ Math.round(Math.random() * arr.length) ]
    lettererElementChild.innerText = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    return lettererElementChild;
}