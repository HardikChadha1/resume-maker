// Select elements from the DOM
const resumeForm = document.getElementById('resumeForm');
const resumePreview = document.getElementById('resumePreview');

// Event listener for form submission
resumeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Generate HTML content for preview
    const htmlContent = `
        <h3>${resumeForm.elements.fullName.value}</h3>
        <p>Email: ${resumeForm.elements.email.value}</p>
        <p>Phone: ${resumeForm.elements.phone.value}</p>
        <h4>Education</h4>
        <p>${resumeForm.elements.education.value}</p>
        <h4>Work Experience</h4>
        <p>${resumeForm.elements.experience.value}</p>
        <h4>Skills</h4>
        <p>${resumeForm.elements.skills.value}</p>
    `;

    // Update the preview section
    resumePreview.innerHTML = htmlContent;
});

