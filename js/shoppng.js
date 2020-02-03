"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shopping = function () {
  function Shopping() {
    _classCallCheck(this, Shopping);
  }

  _createClass(Shopping, [{
    key: "handleclear",
    value: function handleclear() {
      ROOT_SHOPPING.innerHTML = "";
    }
  }, {
    key: "render",
    value: function render() {
      var productsStore = localStorageUtils.getProducts();
      var htmlCatalogue = "";
      var cataloguesum = 0;

      CATALOGUE.forEach(function (_ref) {
        var id = _ref.id,
            name = _ref.name,
            price = _ref.price;

        if (productsStore.indexOf(id) !== -1) {
          htmlCatalogue += "\n            <tr class=\"shopping__row\">\n                <td class=\"shopping__product-name\">\uD83D\uDCB2 " + name + "</td>\n                <td class=\"shopping__product-price\">" + parseInt(price).toLocaleString("en-IN") + " \u0413\u0420\u041D.</td>\n            </tr>";
          cataloguesum += parseInt(price);
        }
      });

      var html = "\n    <div class=\"shopping__wrapper\">\n    <div class=\"shopping__container\">\n    <div class=\"shopping_close\" onclick=\"ShoppingPage.handleclear()\"></div>\n        <table class=\"shopping__table\">\n          " + htmlCatalogue + "\n          <tr class=\"shopping__row\">\n                <td class=\"shopping__product-name\">\uD83D\uDCB0 \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u043E\u0432:</td>\n                <td class=\"shopping__product-price\">" + cataloguesum.toLocaleString("en-IN") + " \u0413\u0420\u041D.</td>\n            </tr>\n        </table>\n    </div>\n    </div>";
      ROOT_SHOPPING.innerHTML = html;
    }
  }]);

  return Shopping;
}();

var ShoppingPage = new Shopping();
var busket = document.getElementById("buskets__img");
busket.addEventListener("click", function () {
  ShoppingPage.render();
  console.log("Clicked");
});