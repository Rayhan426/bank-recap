document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;
   
    const passField = document.getElementById('password-field');
    const passFieldValue =  passField.value;
    console.log(emailFieldValue, passFieldValue);
     emailField.value = '';

    if (emailFieldValue === 'rayhan.sarkar704@gmail.com' && passFieldValue === 'rayhan') {
        
        window.location.href = 'bank.html';
    }
    else{
        alert('Wrong email or password');
    }
})

