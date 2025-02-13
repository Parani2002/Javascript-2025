// console.log(document.getElementById('task').textContent);
var input = document.getElementById('task');


var addBtn = document.getElementById('addTask');
//creating delete button element and set attributes.
const delBtn = document.createElement('button');
delBtn.setAttribute(id)

addBtn.addEventListener('click', function(){
    var task = document.getElementById('task').value;
    if(task){
        const li = document.createElement('li');
        const ul = document.getElementById('taskList');
        li.innerHTML = `<p>${input.value.trim()}</p>`;
        ul.appendChild(li);
        li.appendChild(delBtn);
        input.value = '';
    } 
});