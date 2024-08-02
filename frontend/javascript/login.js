document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Check if the email and password match the stored user data
        if (user && user.email === email && user.password === password) {
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to dashboard
        } else {
            alert('Invalid email or password');
        }
    });
});

