// Event listener for form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  
  // Retrieve the values from the input fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Valid credentials (for demo purposes)
  const validUsername = "user123";
  const validPassword = "password123";
  
  // Clear any previous error message
  document.getElementById("error-message").style.display = "none";
  
  // Check if credentials match
  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    // Optionally redirect after successful login
    // window.location.href = "home.html"; // Redirect to another page
  } else {
    // Show error message if credentials are incorrect
    document.getElementById("error-message").textContent = "Invalid username or password!";
    document.getElementById("error-message").style.display = "block";
  }
});
