document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-name').textContent = user.name;
    } else {
        window.location.href = 'login.html'; // Redirect to login if user is not logged in
    }
});
