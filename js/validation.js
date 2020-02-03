function checkmail(value) {
  txt = value;
  if (txt == "") {
    errorPopup(
      "div",
      "SubscribePopup",
      "body",
      '"Введите Адрес электронной почты."'
    );
    return false;
  }
  if (txt.indexOf(",") >= 0 || txt.indexOf(";") >= 0 || txt.indexOf(" ") >= 0) {
    errorPopup(
      "div",
      "SubscribePopup",
      "body",
      '"Адрес электронной почты был введен неправильно."'
    );
    return false;
  }
  dog = txt.indexOf("@");
  if (dog == -1) {
    errorPopup("div", "SubscribePopup", "body", '"Нет символа @."');
    return false;
  }
  if (txt.indexOf(".") == -1) {
    errorPopup("div", "SubscribePopup", "body", '"Нет символа "." "');
    return false;
  }
  if (dog < 1 || dog > txt.length - 5) {
    errorPopup(
      "div",
      "SubscribePopup",
      "body",
      '"Адрес электронной почты был введен неправильно."'
    );
    return false;
  }
  if (txt.charAt(dog - 1) == "." || txt.charAt(dog + 1) == ".") {
    errorPopup(
      "div",
      "SubscribePopup",
      "body",
      '"Адрес электронной почты был введен неправильно."'
    );
    return false;
  }
  errorPopup(
    "div",
    "SubscribePopup",
    "body",
    '"Вы успешно подписаны на рассылку"'
  );
}
const form = document.getElementById("form");

let inputs = document.querySelectorAll("input[data-rule]");
for (let input of inputs) {
  input.addEventListener("blur", function() {
    let rule = this.dataset.rule;
    let value = this.value;
    switch (rule) {
      case "search":
        if (value.length > +this.dataset.from) {
          this.classList.remove("invalid");
          this.classList.add("valid");
        } else if (value.length === 0) {
          this.classList.remove("valid");
          this.classList.remove("invalid");
        } else {
          this.classList.remove("valid");
          this.classList.add("invalid");
        }
        break;
      case "price":
        form.addEventListener("submit", e => {
          if (this.value > 0) {
            this.classList.remove("invalid");
            this.classList.add("valid");
          } else if (value.length === 0) {
            this.classList.remove("valid");
            this.classList.remove("invalid");
            e.preventDefault();
          } else {
            this.classList.remove("valid");
            this.classList.add("invalid");
            e.preventDefault();
          }
        });
        break;
      case "email":
        checkmail(value);
        break;
    }
  });
}
