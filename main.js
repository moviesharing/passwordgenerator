const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-_+=<>?';

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let charset = lowercaseChars;

    if (includeUppercase) {
        charset += uppercaseChars;
    }
    if (includeNumbers) {
        charset += numberChars;
    }
    if (includeSymbols) {
        charset += symbolChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById('password').textContent = password;
}

document.getElementById('generate').addEventListener('click', generatePassword);

// Theme switch functionality
const body = document.body;
const themeToggle = document.querySelector('#theme-toggle');

// Function to toggle theme and update button text
function toggleTheme() {
    // Toggle the theme
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Get the current theme class after toggling
    const currentTheme = body.classList.contains('dark-theme') ? 'Light Mode?' : 'Dark Mode?';

    // Update the button text based on the current theme
    themeToggle.textContent = currentTheme;
}

themeToggle.addEventListener('click', toggleTheme);

// Set the default theme to Light Mode
body.classList.add('light-theme');
themeToggle.textContent = 'Dark Mode?';

// Update the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;