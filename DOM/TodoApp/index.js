// console.log(document.getElementById('task').textContent);
var input = document.getElementById('task');


// input.addEventListener('input', function(){
//     console.log(input.value)
// })

var addBtn = document.getElementById('addTask');
addBtn.addEventListener('click', function(){
    var task = document.getElementById('task').value;
    if(task){
        const li = document.createElement('li');
        const ul = document.getElementById('taskList');
        li.innerHTML = `<p>${input.value.trim()}</p>`;
        ul.appendChild(li);
        input.value = '';

    } 
});