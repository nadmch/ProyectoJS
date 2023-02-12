const primerNombre = document.getElementById("name");
const direccion = document.getElementById("email");
const clave = document.getElementById("password");
const confirmarClave = document.getElementById("password2");

const nombreError = document.getElementById("nombre_error");
const emailError = document.getElementById("email_error");
const passwordError = document.getElementById("password_error");

const buttonEnviar = document.getElementById("buttonEnviar");
const formulario = document.getElementById("formulario");

const listaIconos = document.getElementsByClassName("icono_error");
const listaInputs = document.getElementsByClassName("campo");
const parrafosError = document.getElementsByClassName("error_campo_vacio");
const textoPassword = document.querySelector(".error_caracteres");
const desigualPassword = document.querySelector(".error_password");
const iconoCheck = document.getElementsByClassName("icono_check");
const textoEmailInvalido = document.querySelector(".error_email");

primerNombre.oninput = () => {
  validarDatos(primerNombre, listaIconos, iconoCheck);
};
direccion.oninput = () => {
  validarEmail(direccion, textoEmailInvalido, listaIconos, iconoCheck);
};
clave.oninput = () => {
  validarPassword(clave, listaIconos, textoPassword, iconoCheck);
};
confirmarClave.oninput = () => {
  validarPassword(confirmarClave, listaIconos, iconoCheck);
  compararPasswords(
    clave,
    confirmarClave,
    desigualPassword,
    iconoCheck,
    listaIconos
  );
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  if (listaInputs[(0, 1, 2, 3)].value === "") {
    mostrarError(listaIconos, parrafosError, listaInputs);
  } else if (listaInputs[(0, 1, 2, 3)].value != "") {
    quitarError(listaIconos, listaInputs, parrafosError, iconoCheck);
    alert("ha sido enviado correctamente");
  }
});

const expEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
function validarEmail(direccion, parrafoError, icono_error, icono_check) {
  const valido = expEmail.test(direccion.value);

  if (!valido) {
    direccion.style.border = "1.5px solid red";
    parrafoError.style.display = "block";
    icono_error[1].style.display = "block";
    icono_check[1].style.display = "none";
  } else {
    direccion.style.border = "1.5px solid green";
    parrafoError.style.display = "none";
    icono_error[1].style.display = "none";
    icono_check[1].style.display = "block";
  }
}

const expNombre = /^[A-Za-z]+$/;
function validarDatos(datosPersonales, iconosDeError, iconoCheck) {
  const textoValido = expNombre.test(datosPersonales.value);
  if (!textoValido) {
    datosPersonales.style.border = "1.5px solid red";
    iconosDeError[0].style.display = "block";
    iconoCheck[0].style.display = "none";
  } else if (datosPersonales.value.length < 3) {
    datosPersonales.style.border = "1.5px solid red";
    iconosDeError[0].style.display = "block";
    iconoCheck[0].style.display = "none";
  } else if (datosPersonales.value.length > 3) {
    datosPersonales.style.border = "1.5px solid green";
    iconosDeError[0].style.display = "none";
    iconoCheck[0].style.display = "block";
  } else {
    datosPersonales.style.border = "1.5px solid green";
    iconosDeError[0].style.display = "none";
    iconoCheck[0].style.display = "block";
  }
}

function validarPassword(
  passwordInput,
  listaDeIconos,
  parrafoPassword,
  iconoCheck
) {
  if (passwordInput.value.length <= 7) {
    passwordInput.style.border = "1.5px solid red";
    if (passwordInput.id == "password") {
      listaDeIconos[2].style.display = "block";
      parrafoPassword.style.display = "block";
      iconoCheck[2].style.display = "none";
      iconoCheck[3].style.display = "none";
    }
    if (passwordInput.id == "password2") {
      listaDeIconos[3].style.display = "block";
      passwordInput.style.border = "1.5px solid red";
    }
  } else if (passwordInput.value.length > 7) {
    passwordInput.style.border = "1.5px solid green";
    if (passwordInput.id == "password") {
      listaDeIconos[2].style.display = "none";
      parrafoPassword.style.display = "none";
      iconoCheck[2].style.display = "block";
      if (passwordInput.id == "password2") {
        listaDeIconos[2].style.display = "block";
      }
    }
  }
}

function compararPasswords(
  valorPassword1,
  valorPassword2,
  textoerror,
  iconoCheck,
  listaIconos
) {
  if (valorPassword1.value != valorPassword2.value) {
    textoerror.style.display = "block";
    iconoCheck[2].style.display = "block";
    iconoCheck[3].style.display = "none";
    valorPassword1.style.border = "1.5px solid green";
    valorPassword2.style.border = "1.5px solid red";
    listaIconos[3].style.display = "block";
  } else if (valorPassword1.value === valorPassword2.value) {
    textoerror.style.display = "none";
    iconoCheck[3].style.display = "block";
    iconoCheck[2].style.display = "block";
    listaIconos[3].style.display = "none";
    valorPassword1.style.border = "1.5px solid green";
  }
}

function quitarError(iconosError, borderInputs, parrafosDeError, iconoCheck) {
  borderInputs[0].style.border = "1px solid black";
  borderInputs[1].style.border = "1px solid black";
  borderInputs[2].style.border = "1px solid black";
  borderInputs[3].style.border = "1px solid black";

  iconosError[0].style.display = "none";
  iconosError[1].style.display = "none";
  iconosError[2].style.display = "none";
  iconosError[3].style.display = "none";

  parrafosDeError[0].style.display = "none";
  parrafosDeError[1].style.display = "none";
  parrafosDeError[2].style.display = "none";
  parrafosDeError[3].style.display = "none";

  iconoCheck[0].style.display = "none";
  iconoCheck[1].style.display = "none";
  iconoCheck[2].style.display = "none";
  iconoCheck[3].style.display = "none";
}

function mostrarError(listaDeIconos, parrafosDeError, inputs) {
  parrafosDeError[0].style.display = "block";
  parrafosDeError[1].style.display = "block";
  parrafosDeError[2].style.display = "block";
  parrafosDeError[3].style.display = "block";

  listaDeIconos[0].style.display = "block";
  listaDeIconos[1].style.display = "block";
  listaDeIconos[2].style.display = "block";
  listaDeIconos[3].style.display = "block";

  inputs[0].style.border = "1.5px solid red";
  inputs[1].style.border = "1.5px solid red";
  inputs[2].style.border = "1.5px solid red";
  inputs[3].style.border = "1.5px solid red";
}
