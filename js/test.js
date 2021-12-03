const htmlSubmit = document.getElementById('submit');
const htmlCounter = document.getElementById('counter');
const htmlDisplay = document.getElementById('display');

let counter = 0

submit.addEventListener('click', (event) => {
    counter = counter + 1;
    
    if (counter & 2 == 0) {
        htmlDisplay.textContent = 'Hello world!';
        console.log(counter);
    }
    else {
        htmlDisplay.textContent = 'Fuck you!';
    }
});
