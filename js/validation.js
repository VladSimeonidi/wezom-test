"use strict";

function checkmail(value) {
  txt = value;
  if (txt == "") {
    errorPopup("div", "SubscribePopup", "body", '"Введите Адрес электронной почты."');
    return false;
  }
  if (txt.indexOf(",") >= 0 || txt.indexOf(";") >= 0 || txt.indexOf(" ") >= 0) {
    errorPopup("div", "SubscribePopup", "body", '"Адрес электронной почты был введен неправильно."');
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
    errorPopup("div", "SubscribePopup", "body", '"Адрес электронной почты был введен неправильно."');
    return false;
  }
  if (txt.charAt(dog - 1) == "." || txt.charAt(dog + 1) == ".") {
    errorPopup("div", "SubscribePopup", "body", '"Адрес электронной почты был введен неправильно."');
    return false;
  }
  errorPopup("div", "SubscribePopup", "body", '"Вы успешно подписаны на рассылку"');
}
var form = document.getElementById("form");

var inputs = document.querySelectorAll("input[data-rule]");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var input = _step.value;

    input.addEventListener("blur", function () {
      var _this = this;

      var rule = this.dataset.rule;
      var value = this.value;
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
          form.addEventListener("submit", function (e) {
            if (_this.value > 0) {
              _this.classList.remove("invalid");
              _this.classList.add("valid");
            } else if (value.length === 0) {
              _this.classList.remove("valid");
              _this.classList.remove("invalid");
              e.preventDefault();
            } else {
              _this.classList.remove("valid");
              _this.classList.add("invalid");
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
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}