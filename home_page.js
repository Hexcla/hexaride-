// Show Find Captain form and hide Post Ride icon and text
function showFindCaptain() {
    // Hide Post Ride icon and text
    document.getElementById('post-ride-option').classList.add('shrink');
    
    // Display Find Captain form and animate it
    document.getElementById('find-captain-form').style.display = 'block';
    document.getElementById('find-captain-form').classList.add('grow');
}

// Show Post Ride form and hide Find Captain icon and text
function showPostRide() {
    // Hide Find Captain icon and text
    document.getElementById('find-captain-option').classList.add('shrink');
    
    // Display Post Ride form and animate it
    document.getElementById('post-ride-form').style.display = 'block';
    document.getElementById('post-ride-form').classList.add('grow');
}
