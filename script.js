document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  const imgUrl = event.target.imgurl.value;

  // document.getElementsByClassName("delete-contacts");

  // NAME VALIDATION
  if (nameInput.length < 3) {
    alert("El nombre debe contener 3 caracteres o mas");
    return;
  }

  // EMAIL VALIDATION
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Email invalido");
    return;
  }

  // MESSAGE VALIDATION
  if (message.length < 5) {
    alert("El mensaje debe contener mas de 5 caracteres");
    return;
  }

  // IMG URL VALIDATION
  const imgurlRegex = /^(https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp))$/i;
  if (!imgurlRegex.test(imgUrl)) {
    alert("URL invalido: Inserte una extension de imagen");
    return;
  }
  // FORM SENT SUCCESFULLY
  else alert("Formulario enviado con éxito");
  event.target.submit();
  storeLocalData(nameInput, email, message, imgUrl);
});

// STORE DATA IN LOCAL STORAGE
function storeLocalData(nameInput, email, message, imgUrl) {
  let userData = [{ nameInput, email, message, imgUrl }];
  let newUserData = JSON.parse(localStorage.getItem("userData"));

  localStorage.setItem("userData", JSON.stringify(userData));

  newUserData.push(...userData);
  localStorage.setItem("userData", JSON.stringify(newUserData));
}

// document
//   .getElementsByClassName("delete-contacts")
//   .addEventListener("click", function deleteAllContacts() {
//     localStorage.clear();
//   });

btnClearContacts.onclick = function deleteAllContacts() {
  localStorage.clear();
  if (localStorage.length === 0) lsOutput.innerHTML = "";
};
// function deleteAllContacts() {

//   localStorage.clear();
// }
