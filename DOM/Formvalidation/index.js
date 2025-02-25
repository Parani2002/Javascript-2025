var username = document.getElementById('username');

var email = document.getElementById('email');

var password = document.getElementById('password');

var confirmPassword = document.getElementById('confirmPassword');

var btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', function(){
    console.log(username.value);
    var p = document.createElement('p');
    var errorEle = document.getElementsByClassName('error');
    p.style.color = 'red';
    if(username.value == ''){
        
        p.innerHTML = 'Please enter a username!!!';
        document.getElementById('usernameDiv').appendChild(p);
    }
    if(email.value == ' '){
        errorEle.style.display = 'block';
        p.innerHTML = `Please enter an email!!!`;
        document.getElementById('emailDiv').appendChild(p);
    }


})