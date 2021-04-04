
'use strict'
const eye = document.getElementById('eye__input');
const passwordInput = document.getElementById('password');
eye.onclick = function(){
    if(passwordInput.getAttribute('type') == 'password'){
        passwordInput.setAttribute('type', 'text');
    }
    else{
        passwordInput.setAttribute('type', 'password');
    }
}
