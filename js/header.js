const productBusket = localStorageUtils.getProducts();
const busketCount = document.getElementById("busket");
const productCompare = localStorageUtilsCompare.getProducts();
const productCountCompare = document.getElementById("compare");
const productFavorite = localStorageUtilsFavorite.getProducts();
const productCountFavorite = document.getElementById("favorite");

class Header {
  show(element, count) {
    element.innerText = count;
    if (count == 0) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
}
const headerPage = new Header();
const headerCompare = new Header();
const headerFavorite = new Header();
headerPage.show(busketCount, productBusket.length);
headerCompare.show(productCountCompare, productCompare.length);
headerFavorite.show(productCountFavorite, productFavorite.length);
