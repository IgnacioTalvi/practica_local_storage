document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  if (nameInput.length < 3) {
    alert("El nombre debe contener 3 caracteres o mas");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Email invalido");
    return;
  }

  if (message.length < 5) {
    alert("El mensaje debe contener mas de 5 caracteres");
    return;
  } else storeLocalData(nameInput, email, message);
  alert("Formulario enviado con éxito");
  event.target.submit();
});

function storeLocalData(name, email, message) {
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
}
