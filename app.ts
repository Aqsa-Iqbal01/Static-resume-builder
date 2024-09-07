document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumePreview = document.getElementById('resumePreview') as HTMLDivElement;
    const previewProfilePicture = document.getElementById('previewProfilePicture') as HTMLDivElement;
    const previewName = document.getElementById('previewName') as HTMLParagraphElement;
    const previewEmail = document.getElementById('previewEmail') as HTMLParagraphElement;
    const previewPhone = document.getElementById('previewPhone') as HTMLParagraphElement;
    const previewEducation = document.getElementById('previewEducation') as HTMLParagraphElement;
    const previewSkills = document.getElementById('previewSkills') as HTMLParagraphElement;
    const previewWorkExperience = document.getElementById('previewWorkExperience') as HTMLParagraphElement;

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const updatePreview = () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

        // Handle profile picture
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewProfilePicture.style.backgroundImage = `url(${e.target?.result})`;
            };
            reader.readAsDataURL(profilePictureInput.files[0]);
        } else {
            previewProfilePicture.style.backgroundImage = '';
        }

        // Update preview sections
        previewName.textContent = `Name: ${name}`;
        previewEmail.textContent = `Email: ${email}`;
        previewPhone.textContent = `Phone: ${phone}`;
        previewEducation.textContent = education ? education : 'No education information provided';
        previewSkills.textContent = skills ? skills : 'No skills information provided';
        previewWorkExperience.textContent = workExperience ? workExperience : 'No work experience information provided';

        // Show the preview section
        resumePreview.classList.remove('hidden');
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        updatePreview();
    });
});
