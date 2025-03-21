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
  } else alert("Formulario enviado con éxito");
  event.target.submit();
  storeLocalData(nameInput, email, message);
});

function storeLocalData(nameInput, email, message) {
  let userData = [{ nameInput, email, message }];
  let newUserData = JSON.parse(localStorage.getItem("userData"));

  localStorage.setItem("userData", JSON.stringify(userData));

  // localStorage.setItem("userData", JSON.stringify(newUserData));

  newUserData.push(userData);
  localStorage.setItem("userData", JSON.stringify(newUserData));
}

// let bootcamps = ["fswd", "ux", "data", "ciber"];
// localStorage.setItem("bootcamps", JSON.stringify(bootcamps));

// let nuevoBootcamp = JSON.parse(localStorage.getItem("bootcamps"));

// nuevoBootcamp.push("marketing");
// localStorage.setItem("bootcamps", JSON.stringify(nuevoBootcamp));

// function storeLocalData(nameInput, email, message) {
//   addValue[i].addEventListener("click", () => {
//     // get items from localStorage, or declare new one if not exist
//     let userData = localStorage.getItem("UserData") || "[]";
//     userData = JSON.parse(userData);
//     // declare and add the new item
//     userData.push({ name: nameInput.value, email: email.value, message: });
//     localStorage.setItem("UserData", JSON.stringify(userData));
//   });
// }

// addCart[i].addEventListener("click", () => {
//   // get items from localStorage, or declare new one if not exist
//   let menuItems = localStorage.getItem("ProductsInCart") || "[]";
//   menuItems = JSON.parse(menuItems);
//   // declare and add the new item
//   menuItems.push({ name: addCart[i].name, price: addCart[i].value });
//   localStorage.setItem("ProductsInCart", JSON.stringify(menuItems));
// });

// data.forEach((storeLocalData) => {
//   return data;
// });

// const users = [
//   {
//     nameInput: "Ignacio",
//     email: "Talvi",
//     message: "Hola",
//   },
// ];

// localStorage.setItem("name", nameInput);
//   localStorage.setItem("email", email);
//   localStorage.setItem("message", message);

// let user = {
//   name: "name",
//   email: "email",
//   message: "message",
// };

// let userString = JSON.parse(user);

// let firstName = localStorage.getItem("name");
// let lastName = localStorage.surname;
// console.log(`Hola, mi nombre es ${firstName} ${lastName}`);

//   let user = {
//     name: name,
//     email: email,
//     age: age,
//   };
//   user;
// }
