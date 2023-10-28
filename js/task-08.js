const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", onFormElementEvent);

function onFormElementEvent(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if ((email === "") | (password === "")) {
    alert("Всі поля повинні бути заповнені");
  } else {
    const user = {
      email,
      password,
    };

    console.log(user);
  }

  form.reset();
}
