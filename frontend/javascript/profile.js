document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-email').textContent = user.email;
        
        // Assuming enrolled courses are part of user data
        const userCourses = user.courses || ['Course 1', 'Course 2'];
        const coursesList = document.getElementById('user-courses');
        coursesList.innerHTML = '';
        userCourses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course;
            coursesList.appendChild(listItem);
        });
    } else {
        window.location.href = 'login.html'; // Redirect to login if user is not logged in
    }
});
