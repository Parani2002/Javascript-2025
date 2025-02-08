console.log(document.getElementById('task').textContent);
var input = document.getElementById('task');


input.addEventListener('input', function(){
    console.log(input.value)
})