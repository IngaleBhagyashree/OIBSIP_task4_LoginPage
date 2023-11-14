function login() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Check if the entered username and password match the stored values
    if (username === "user" && password === "pass") {
        // Store the username in local storage
        localStorage.setItem("username", username);

        // Redirect to a new page or perform other actions
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}
