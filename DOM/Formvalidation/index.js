var username = document.getElementById('username');

var email = document.getElementById('email');

var password = document.getElementById('password');

var confirmPassword = document.getElementById('confirmPassword');

var btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('submit', function(){
    if(username.value == ''){
        document.createElement('p').innerHTML = 'Please enter a username';

        
    }
})