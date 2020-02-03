"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Products = function () {
  function Products() {
    _classCallCheck(this, Products);

    this.ClassNameActive = "product__buy_active";
    this.labelAdd = "купить товар";
    this.labelRemove = "Отмена покупки";
    this.labelAddCompare = "Сравнить товар";
    this.labelRemoveCompare = "В сравнении";
    this.labelAddFavorite = "В избранное";
    this.labelRemoveFavorite = "В избранном";
  }

  _createClass(Products, [{
    key: "handleSetLocationStorage",
    value: function handleSetLocationStorage(e, id) {
      var _localStorageUtils$pu = localStorageUtils.putProducts(id),
          pushProduct = _localStorageUtils$pu.pushProduct,
          products = _localStorageUtils$pu.products;

      if (pushProduct) {
        e.classList.add(this.ClassNameActive);
        e.innerHTML = this.labelRemove;
      } else {
        e.classList.remove(this.ClassNameActive);
        e.innerHTML = this.labelAdd;
      }
      headerPage.show(busketCount, products.length);
    }
  }, {
    key: "handleSetLocationStorageCompare",
    value: function handleSetLocationStorageCompare(e, id) {
      var _localStorageUtilsCom = localStorageUtilsCompare.putProducts(id),
          pushProduct = _localStorageUtilsCom.pushProduct,
          products = _localStorageUtilsCom.products;

      if (pushProduct) {
        e.innerHTML = this.labelRemoveCompare;
      } else {
        e.innerHTML = this.labelAddCompare;
      }
      headerCompare.show(productCountCompare, products.length);
    }
  }, {
    key: "handleSetLocationStorageFavorites",
    value: function handleSetLocationStorageFavorites(e, id) {
      var _localStorageUtilsFav = localStorageUtilsFavorite.putProducts(id),
          pushProduct = _localStorageUtilsFav.pushProduct,
          products = _localStorageUtilsFav.products;

      if (pushProduct) {
        e.innerHTML = this.labelRemoveFavorite;
      } else {
        e.innerHTML = this.labelAddFavorite;
      }
      headerFavorite.show(productCountFavorite, products.length);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var productsStore = localStorageUtils.getProducts();
      var htmlCatalogue = "";
      CATALOGUE.forEach(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            img = _ref.img,
            price = _ref.price,
            discount = _ref.discount,
            currency = _ref.currency;

        var activeClass = "";
        var actveText = "";
        var actveTextCompare = "";
        var actveTextFavorite = "";
        if (productsStore.indexOf(id) === -1) {
          actveText = _this.labelAdd;
        } else {
          activeClass = " " + _this.ClassNameActive;
          actveText = _this.labelRemove;
        }
        var productsStoreCompare = localStorageUtilsCompare.getProducts();
        if (productsStoreCompare.indexOf(id) === -1) {
          actveTextCompare = _this.labelAddCompare;
        } else {
          actveTextCompare = _this.labelRemoveCompare;
        }
        var productsStoreFavorite = localStorageUtilsFavorite.getProducts();
        if (productsStoreFavorite.indexOf(id) === -1) {
          actveTextFavorite = _this.labelAddFavorite;
        } else {
          actveTextFavorite = _this.labelRemoveFavorite;
        }
        htmlCatalogue += "\n        <li class=\"product__li\">\n        <div class=\"product__mark\">mark</div>\n        <div class=\"product__name\"><a class=\"product__link\" href=\"#\">" + name + "</a></div>\n        <img class=\"product__img\" src=\"" + img + "\">\n        <div class=\"product__priceblock\"><span class=\"product__price\">" + price + " " + currency + "</span><span class=\"product__discount\">" + discount + " " + currency + "</span></div>\n        <button class=\"product__buy" + activeClass + "\" onclick=\"productPage.handleSetLocationStorage(this, '" + id + "')\">" + actveText + "</button>\n        <div class=\"product__buttonblock\"><button class=\"product__compare\" onclick=\"productPage.handleSetLocationStorageCompare(this, '" + id + "')\">" + actveTextCompare + "</button><button class=\"product__favorites\" onclick=\"productPage.handleSetLocationStorageFavorites(this, '" + id + "')\">" + actveTextFavorite + "</button></div>\n        </li>\n        ";
      });
      var html = "\n    <ul class=\"product\">" + htmlCatalogue + "</ul>\n    ";
      ROOT_PRODUCTS.innerHTML = html;
    }
  }]);

  return Products;
}();

var productPage = new Products();
productPage.render();