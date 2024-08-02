document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Mock signup process for demonstration purposes
        const user = {
            name: name,
            email: email,
            password: password, // In a real application, passwords should be hashed
            courses: []
        };

        // Save user data in localStorage for simplicity
        localStorage.setItem('user', JSON.stringify(user));
        alert('Sign up successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    });
});
