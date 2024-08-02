document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const provider = urlParams.get('provider');
    document.getElementById('provider-name').textContent = provider.replace('_', ' ');

    const insuranceForm = document.getElementById('insurance-form');
    const beneficiariesInput = document.getElementById('beneficiaries');
    const beneficiariesInfo = document.getElementById('beneficiaries-info');

    beneficiariesInput.addEventListener('input', function() {
        const count = parseInt(this.value, 10);
        beneficiariesInfo.innerHTML = '';

        for (let i = 0; i < count; i++) {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>Beneficiary ${i + 1}</h3>
                <label for="beneficiary-name-${i}">Name:</label>
                <input type="text" id="beneficiary-name-${i}" name="beneficiary-name-${i}" required>
                
                <label for="beneficiary-age-${i}">Age:</label>
                <input type="number" id="beneficiary-age-${i}" name="beneficiary-age-${i}" min="0" required>
                
                <label for="beneficiary-relation-${i}">Relation:</label>
                <input type="text" id="beneficiary-relation-${i}" name="beneficiary-relation-${i}" required>
            `;
            beneficiariesInfo.appendChild(div);
        }
    });

    insuranceForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(insuranceForm);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Save insurance information in localStorage for demonstration
        localStorage.setItem('insuranceInfo', JSON.stringify(data));
        alert('Insurance information submitted successfully.');
        window.location.href = 'confirmation.html'; // Redirect to confirmation page
    });
});
