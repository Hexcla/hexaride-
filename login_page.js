document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
        alert('Login Successful');
        // Add your backend call here
    } else {
        alert('Please enter valid credentials');
    }
});
