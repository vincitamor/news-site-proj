// function to take in login info
function login() {
    // Get vals from input
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Check if the username and password are correct
    if (email && password) {
      // Redirect to homepage
      window.location.href = "LoggedInIndex.html";
    }
  }
  