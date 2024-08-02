document.addEventListener('DOMContentLoaded', () => {
    const levels = 6;
    const levelsContainer = document.getElementById('levels');

    const urlParams = new URLSearchParams(window.location.search);
    const school = urlParams.get('school');

    const schoolHeading = document.createElement('h2');
    schoolHeading.textContent = `School: ${school}`;
    levelsContainer.appendChild(schoolHeading);

    for (let level = 1; level <= levels; level++) {
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('level');
        levelDiv.innerHTML = `
            <h3>Level ${level}</h3>
            <button onclick="viewLessons('${school}', ${level})">View Lessons</button>
        `;
        levelsContainer.appendChild(levelDiv);
    }
});

function viewLessons(school, level) {
    window.location.href = `lessons.html?school=${encodeURIComponent(school)}&level=${level}`;
}
