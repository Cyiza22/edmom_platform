document.addEventListener('DOMContentLoaded', () => {
    const backToResourcesButton = document.querySelector('.confirmation-message button');

    backToResourcesButton.addEventListener('click', function() {
        window.location.href = 'resources.html'; // Redirect to resources page
    });
});
