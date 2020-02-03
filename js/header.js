"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var productBusket = localStorageUtils.getProducts();
var busketCount = document.getElementById("busket");
var productCompare = localStorageUtilsCompare.getProducts();
var productCountCompare = document.getElementById("compare");
var productFavorite = localStorageUtilsFavorite.getProducts();
var productCountFavorite = document.getElementById("favorite");

var Header = function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: "show",
    value: function show(element, count) {
      element.innerText = count;
      if (count == 0) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    }
  }]);

  return Header;
}();

var headerPage = new Header();
var headerCompare = new Header();
var headerFavorite = new Header();
headerPage.show(busketCount, productBusket.length);
headerCompare.show(productCountCompare, productCompare.length);
headerFavorite.show(productCountFavorite, productFavorite.length);