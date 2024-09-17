document.querySelector('.reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!code || !newPassword || !confirmPassword) {
        alert("Please fill in all fields!");
    } else if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Password reset successful!");
    }
});
