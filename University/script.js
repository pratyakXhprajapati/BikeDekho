var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

var user = JSON.parse(localStorage.getItem("user"));

console.log(user);

if (user) {
  // User is logged in, show logout button and hide login and signup buttons
  document.getElementById("userName").style.display = "inline-block";
  document.querySelector("#userDisplayName").textContent = user.username;

  document.getElementById("loginNavItem").style.display = "none";
  document.getElementById("signupNavItem").style.display = "none";
  document.getElementById("logoutNavItem").style.display = "inline-block";
} else {
  // User is not logged in, hide logout button and show login and signup buttons
  document.getElementById("userName").style.display = "none";

  document.getElementById("loginNavItem").style.display = "inline-block";
  document.getElementById("signupNavItem").style.display = "inline-block";
  document.getElementById("logoutNavItem").style.display = "none";
}

function logout() {
  // Remove user information from localStorage
  localStorage.removeItem("user");

  // Reload the page to update the navigation
  location.reload();
}
