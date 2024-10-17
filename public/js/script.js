function submitLogin() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username && !password) {
        document.getElementById('message').innerText = "Please enter your username & password";
        document.getElementById('message').style.color = 'red';
        return;
    }
    if (username.length !== 10 || !/^\d+$/.test(username)) {
        document.getElementById('message').innerText = "Username must be tu account username 10 digits.";
        document.getElementById('message').style.color = "red";
        return;
    }
    if (password.length !== 13 || !/^\d+$/.test(password)) {
        document.getElementById('message').innerText = "Password must be tu account password 13 digits.";
        document.getElementById('message').style.color = "red";
        return;
    }

    const url = ('https://restapi.tu.ac.th/api/v1/auth/Ad/verify');

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key' : 'TUccc18e1b7e74094e279c457a405467d2e89eb803f6c5f72da823d99b0c9b9e013e310e0adc1237e1853a4a0f249788c2'
        },
        body: JSON.stringify({"UserName" : username,"PassWord" : password})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed. Invalid username or password.');
    }
        return response.json();
    })
    .then(data => {
        document.getElementById('message').style.color = 'black';
        document.getElementById('message').innerText = data.displayname_th+'\n\n **Data** \n StudentID: '+
        data.username+'\n Name: '+
        data.displayname_en+'\n Email: '+
        data.email+'\n Department: '+
        data.department+'\n Faculty: '+
        data.faculty;
    })
    .catch(error => {
        console.error('Error:', error)
    });
}
