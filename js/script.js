const checkbox = document.getElementById("checkbox");
const select5 = document.getElementById("5");
const select7 = document.getElementById("7");
const toggleTarget = document.getElementById("switch");
const formSubscribe = document.getElementById("footer__form");
const toggleCheckbox = () => {
  if (checkbox.checked == true) {
    select5.style.display = "block";
    select7.style.display = "block";
  } else {
    select5.style.display = "none";
    select7.style.display = "none";
  }
};
toggleTarget.addEventListener("click", toggleCheckbox);
const btnContainer = document.getElementById("categorybar");
const btns = btnContainer.getElementsByClassName("categorybar__item");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

formSubscribe.addEventListener("submit", e => {
  e.preventDefault();
});

let iconButton = document.getElementById("icon");
console.log(iconButton);
let menu = document.getElementById("menu");
console.log(menu);
iconButton.addEventListener("click", function() {
  menu.classList.toggle("menu-db");
  iconButton.classList.toggle("icon-fixed");
});
console.log(window.innerWidth);
const windowWidth = document.documentElement.clientWidth;
let listItem = document.getElementsByClassName("product-list__item");
for (let item of listItem) {
  if (windowWidth < 1380) {
    item.classList.remove("ul-hover");
  } else {
    item.classList.add("ul-hover");
  }
}
const burgerMenu = document.querySelector(".burger__menu");
burgerMenu.addEventListener("click", function() {
  var list = document.getElementById("mainul");
  this.classList.toggle("burgerMenuActive");
  if (list.style.maxHeight) {
    list.style.maxHeight = null;
  } else {
    list.style.maxHeight = list.scrollHeight + "px";
  }
});
listItem = document.getElementsByClassName("product-list__item");
for (let i of listItem) {
  i.addEventListener("click", function() {
    this.classList.toggle("active-listItem");
    var panel = this.childNodes[1];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const footerUls = document.getElementsByClassName("footer__links-block");
for (let footerUl of footerUls) {
  footerUl.addEventListener("click", function() {
    let borderActive = footerUl.getElementsByClassName(
      "footer__item-block__text"
    );
    borderActive[0].classList.toggle("footerUlItems-active");
    let footerUlItems = this.getElementsByClassName("footer__item");
    for (let item of footerUlItems) {
      if (item.style.display === "block") {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    }
  });
}
