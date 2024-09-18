document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let employeeID = document.getElementById('employeeID').value;
    let organizationEmail = document.getElementById('organizationEmail').value;
    let password = document.getElementById('password').value;
    
    // Simple validation
    if (firstName && secondName && employeeID && organizationEmail && password) {
        alert('Signup Successful');
        // Add your backend call here
    } else {
        alert('Please fill in all fields');
    }
});
