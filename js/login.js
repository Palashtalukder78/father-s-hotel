// document.body(alert('Email: sontan@gmail.com, Password: secret'));

document.getElementById('login-submit').addEventListener('click',function(){
    //Get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //Get Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //Check email and Password
    if(userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }else{
        alert('Wrong Login info');
    }
});

