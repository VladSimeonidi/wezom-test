"use strict";

var checkbox = document.getElementById("checkbox");
var select5 = document.getElementById("5");
var select7 = document.getElementById("7");
var toggleTarget = document.getElementById("switch");
var formSubscribe = document.getElementById("footer__form");
var toggleCheckbox = function toggleCheckbox() {
  if (checkbox.checked == true) {
    select5.style.display = "block";
    select7.style.display = "block";
  } else {
    select5.style.display = "none";
    select7.style.display = "none";
  }
};
toggleTarget.addEventListener("click", toggleCheckbox);
var btnContainer = document.getElementById("categorybar");
var btns = btnContainer.getElementsByClassName("categorybar__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

formSubscribe.addEventListener("submit", function (e) {
  e.preventDefault();
});

var iconButton = document.getElementById("icon");
console.log(iconButton);
var menu = document.getElementById("menu");
console.log(menu);
iconButton.addEventListener("click", function () {
  menu.classList.toggle("menu-db");
  iconButton.classList.toggle("icon-fixed");
});
console.log(window.innerWidth);
var windowWidth = document.documentElement.clientWidth;
var listItem = document.getElementsByClassName("product-list__item");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = listItem[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    if (windowWidth < 1380) {
      item.classList.remove("ul-hover");
    } else {
      item.classList.add("ul-hover");
    }
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

var burgerMenu = document.querySelector(".burger__menu");
burgerMenu.addEventListener("click", function () {
  var list = document.getElementById("mainul");
  this.classList.toggle("burgerMenuActive");
  if (list.style.maxHeight) {
    list.style.maxHeight = null;
  } else {
    list.style.maxHeight = list.scrollHeight + "px";
  }
});
listItem = document.getElementsByClassName("product-list__item");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = listItem[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _i = _step2.value;

    _i.addEventListener("click", function () {
      this.classList.toggle("active-listItem");
      var panel = this.childNodes[1];
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var footerUls = document.getElementsByClassName("footer__links-block");
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop = function _loop() {
    var footerUl = _step3.value;

    footerUl.addEventListener("click", function () {
      var borderActive = footerUl.getElementsByClassName("footer__item-block__text");
      borderActive[0].classList.toggle("footerUlItems-active");
      var footerUlItems = this.getElementsByClassName("footer__item");
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = footerUlItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _item = _step4.value;

          if (_item.style.display === "block") {
            _item.style.display = "none";
          } else {
            _item.style.display = "block";
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    });
  };

  for (var _iterator3 = footerUls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}