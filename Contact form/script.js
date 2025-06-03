document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("services").value.trim();
  const budget = document.getElementById("budget").value.trim();
  const message = document.getElementById("message").value.trim();

  const errors = {
    nameError: "",
    emailError: "",
    serviceError: "",
    budgetError: "",
    messageError: ""
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  let isValid = true;

  if (name === "") {
    errors.nameError = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    errors.emailError = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    errors.emailError = "Invalid email format.";
    isValid = false;
  }

  if (service === "") {
    errors.serviceError = "Please select a service.";
    isValid = false;
  }

  if (budget === "") {
    errors.budgetError = "Please select a budget.";
    isValid = false;
  }

  if (message === "") {
    errors.messageError = "Message is required.";
    isValid = false;
  }

  for (const id in errors) {
    document.getElementById(id).textContent = errors[id];
  }

  const successMsg = document.getElementById("successMsg");
  if (isValid) {
    successMsg.textContent = "✅ Message submitted successfully!";
    document.getElementById("contactForm").reset();
  } else {
    successMsg.textContent = "";
  }
});
