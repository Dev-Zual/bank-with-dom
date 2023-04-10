document.getElementById("login").addEventListener("click", function () {
  const emailField = document.getElementById("email").value;
  const passwordField = document.getElementById("password").value;
  if (emailField === "") {
    alert("please input your email");
  }
  if (passwordField === "") {
    alert("please input your password");
  }
  if (emailField == "nasima@gmail.com" && passwordField == "zual") {
    window.location.href = "bank.html";
  } else {
    alert("please input valid email password");
  }
});
