function submitLogin() {
    console.log("ยิงมาแล้ว");
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = ('https://restapi.tu.ac.th/api/v1/auth/Ad/verify');

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
                'Application-Key' : 'TUccc18e1b7e74094e279c457a405467d2e89eb803f6c5f72da823d99b0c9b9e013e310e0adc1237e1853a4a0f249788c2'
        },
        body: JSON.stringify({"UserName" : username,"PassWord" : password})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
}



function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}
