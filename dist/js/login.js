document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah reload halaman

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "666") {
    window.location.href = "dashboard-admin.html";
  } else if (username === "user" && password === "777") {
    window.location.href = "dashboard-user.html";
  } else {
    alert("Username atau password salah!");
  }
});
