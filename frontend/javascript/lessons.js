document.addEventListener('DOMContentLoaded', () => {
    const courses = ['Mathematics', 'Physics', 'Biology', 'Entrepreneurship', 'Chemistry', 'Geography', 'Kinyarwanda', 'English', 'French', 'Swahili', 'General Studies'];
    const lessonsContainer = document.getElementById('lessons-container');

    const urlParams = new URLSearchParams(window.location.search);
    const school = urlParams.get('school');
    const level = urlParams.get('level');

    const schoolHeading = document.createElement('h2');
    schoolHeading.textContent = `School: ${school}`;
    lessonsContainer.appendChild(schoolHeading);

    const levelHeading = document.createElement('h3');
    levelHeading.textContent = `Level ${level}`;
    lessonsContainer.appendChild(levelHeading);

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h4>${course}</h4>
            <button onclick="takeCourse('${course}', ${level}, '${school}')">Take Course</button>
        `;
        lessonsContainer.appendChild(courseDiv);
    });
});

function takeCourse(course, level, school) {
    alert(`You have enrolled in ${course} for Level ${level} at ${school}`);
    // Add AJAX request to enroll in the course
}
