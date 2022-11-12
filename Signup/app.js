const onUserChange = () => {
  let userName = document.getElementById("user-value");
  userName.style.borderColor = "green";
  let valid = document.getElementById("valid");
  valid.style.display = "none";
};

const onPassChange = () => {
  let password = document.getElementById("pass-value");
  password.style.borderColor = "green";
  let invalid_error = document.getElementById("invalid-error");
  invalid_error.style.display = "none";
};

const onUserBlur = () => {
  let userName = document.getElementById("user-value");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let valid = document.getElementById("valid");
  if (userName.value.match(pattern)) {
    valid.style.display = "none";
  } else {
    valid.style.display = "block";
    userName.style.borderColor = "red";
  }
};

const onPassBlur = () => {
  let password = document.getElementById("pass-value");
  let invalid_pass = document.getElementById("invalid-error");
  if (password.value.length >= 10) {
    invalid_pass.style.display = "none";
  } else {
    invalid_pass.style.display = "block";
    password.style.borderColor = "red";
  }
};
