document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email.value').trim();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === '' || email === '' || password === '') {
        message.style.color = '#d9534f';
        message.textContent = 'Please fill in all fields.';
        return;
    }

    if (password.length < 6) {
        message.style.color = '#d9534f';
        message.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    message.style.color = '#28a745';
    message.textContent = 'Registration successful!';
    
    // Reset form
    this.reset();
});
