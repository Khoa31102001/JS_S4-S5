const form = document.querySelector(".form");
const regexCharacter = (/^[a-zA-Z]+$/);
const regexNumber = (/^\d+$/)
const regexURL = (/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let success = true;

  const firstName = this.elements["firstName"];
  const lastName = this.elements["lastName"];
  const age = this.elements["age"];
  const web = this.elements["Website"];

  if (!validateName(firstName.value.trim())) {
    firstName.classList.add("invalid");
    firstName.nextElementSibling.classList.add("d-inline");
    firstName.nextElementSibling.classList.remove("d-none");
    success = false;
  } else {
    firstName.classList.add("valid");
    firstName.nextElementSibling.classList.remove("d-inline");
    firstName.nextElementSibling.classList.add("d-none");
  }

  if (!validateName(lastName.value.trim())) {
    lastName.classList.add("invalid");
    lastName.nextElementSibling.classList.add("d-inline");
    lastName.nextElementSibling.classList.remove("d-none");
    success = false;
  }
  else {
    lastName.classList.add("valid");
    lastName.nextElementSibling.classList.remove("d-inline");
    lastName.nextElementSibling.classList.add("d-none");
  }
  if (!validateAge(age.value.trim())) {
    age.classList.add("invalid");
    age.nextElementSibling.classList.add("d-inline");
    age.nextElementSibling.classList.remove("d-none");
    success = false;
  }
  else {
    age.classList.add("valid");
    age.nextElementSibling.classList.remove("d-inline");
    age.nextElementSibling.classList.add("d-none");
  }
  if (!validateWebsite(web.value.trim())) {
    web.classList.add("invalid");
    web.nextElementSibling.classList.add("d-inline");
    web.nextElementSibling.classList.remove("d-none");
    success = false;
  }
  else {
    web.classList.add("valid");
    web.nextElementSibling.classList.remove("d-inline");
    web.nextElementSibling.classList.add("d-none");
  }
  if (success) {
    alert("Register successfully");
  }
});

const validateEmptyString = (string) => {
  return !string;
}

const validateName = (name) => {
  console.log(regexCharacter.test(name));
  return validateEmptyString && (regexCharacter.test(name));
};

const validateAge = (age) => {
  return validateEmptyString && (regexNumber.test(age));
};
const validateWebsite = (web) => {
  return validateEmptyString && (regexURL.test(web));
};