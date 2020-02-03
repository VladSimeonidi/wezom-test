"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorageUtils = function () {
  function LocalStorageUtils(obj) {
    _classCallCheck(this, LocalStorageUtils);

    this.keyname = obj;
  }

  _createClass(LocalStorageUtils, [{
    key: "getProducts",
    value: function getProducts() {
      var productsLocalStorage = localStorage.getItem(this.keyname);
      if (productsLocalStorage !== null) {
        return JSON.parse(productsLocalStorage);
      }
      return [];
    }
  }, {
    key: "putProducts",
    value: function putProducts(id) {
      var products = this.getProducts();
      var pushProduct = false;

      var index = products.indexOf(id);
      if (index === -1) {
        products.push(id);
        pushProduct = true;
      } else {
        products.splice(index, 1);
      }
      localStorage.setItem(this.keyname, JSON.stringify(products));
      return { pushProduct: pushProduct, products: products };
    }
  }]);

  return LocalStorageUtils;
}();

var localStorageUtils = new LocalStorageUtils("products");
var localStorageUtilsCompare = new LocalStorageUtils("compare");
var localStorageUtilsFavorite = new LocalStorageUtils("favorites");