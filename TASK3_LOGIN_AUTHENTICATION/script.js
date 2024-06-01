document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // sending data to the server
    console.log('Register:', { username, email, password });

    // reset the form
    event.target.reset();
    alert('User registered successfully!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    //  sending data to the server
    console.log('Login:', { username, password });

    // reset the form
    event.target.reset();
    alert('Login successful!');
});

document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email').value;

    //  sending data to the server
    console.log('Reset Password:', { email });

    // reset the form
    event.target.reset();
    alert('Password reset link sent!');
});
