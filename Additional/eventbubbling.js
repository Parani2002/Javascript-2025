const body = document.getElementsByTagName('body')[0];
const div = document.getElementById('div');
const span = document.getElementById('span');
const button = document.getElementById('button');

body.addEventListener('click', () => {
    console.log('body is clicked');
});

div.addEventListener('click', () => {
    console.log('div is clicked');
});

span.addEventListener('click', () => {
    console.log('span is clicked');
}
);  

button.addEventListener('click', (e) => {
    console.log('button is clicked');
}
);