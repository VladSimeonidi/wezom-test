class Products {
  constructor() {
    this.ClassNameActive = "product__buy_active";
    this.labelAdd = "купить товар";
    this.labelRemove = "Отмена покупки";
    this.labelAddCompare = "Сравнить товар";
    this.labelRemoveCompare = "В сравнении";
    this.labelAddFavorite = "В избранное";
    this.labelRemoveFavorite = "В избранном";
  }
  handleSetLocationStorage(e, id) {
    const { pushProduct, products } = localStorageUtils.putProducts(id);
    if (pushProduct) {
      e.classList.add(this.ClassNameActive);
      e.innerHTML = this.labelRemove;
    } else {
      e.classList.remove(this.ClassNameActive);
      e.innerHTML = this.labelAdd;
    }
    headerPage.show(busketCount, products.length);
  }
  handleSetLocationStorageCompare(e, id) {
    const { pushProduct, products } = localStorageUtilsCompare.putProducts(id);
    if (pushProduct) {
      e.innerHTML = this.labelRemoveCompare;
    } else {
      e.innerHTML = this.labelAddCompare;
    }
    headerCompare.show(productCountCompare, products.length);
  }
  handleSetLocationStorageFavorites(e, id) {
    const { pushProduct, products } = localStorageUtilsFavorite.putProducts(id);
    if (pushProduct) {
      e.innerHTML = this.labelRemoveFavorite;
    } else {
      e.innerHTML = this.labelAddFavorite;
    }
    headerFavorite.show(productCountFavorite, products.length);
  }
  render() {
    const productsStore = localStorageUtils.getProducts();
    let htmlCatalogue = "";
    CATALOGUE.forEach(({ id, name, img, price, discount, currency }) => {
      let activeClass = "";
      let actveText = "";
      let actveTextCompare = "";
      let actveTextFavorite = "";
      if (productsStore.indexOf(id) === -1) {
        actveText = this.labelAdd;
      } else {
        activeClass = " " + this.ClassNameActive;
        actveText = this.labelRemove;
      }
      const productsStoreCompare = localStorageUtilsCompare.getProducts();
      if (productsStoreCompare.indexOf(id) === -1) {
        actveTextCompare = this.labelAddCompare;
      } else {
        actveTextCompare = this.labelRemoveCompare;
      }
      const productsStoreFavorite = localStorageUtilsFavorite.getProducts();
      if (productsStoreFavorite.indexOf(id) === -1) {
        actveTextFavorite = this.labelAddFavorite;
      } else {
        actveTextFavorite = this.labelRemoveFavorite;
      }
      htmlCatalogue += `
        <li class="product__li">
        <div class="product__mark">mark</div>
        <div class="product__name"><a class="product__link" href="#">${name}</a></div>
        <img class="product__img" src="${img}">
        <div class="product__priceblock"><span class="product__price">${price} ${currency}</span><span class="product__discount">${discount} ${currency}</span></div>
        <button class="product__buy${activeClass}" onclick="productPage.handleSetLocationStorage(this, '${id}')">${actveText}</button>
        <div class="product__buttonblock"><button class="product__compare" onclick="productPage.handleSetLocationStorageCompare(this, '${id}')">${actveTextCompare}</button><button class="product__favorites" onclick="productPage.handleSetLocationStorageFavorites(this, '${id}')">${actveTextFavorite}</button></div>
        </li>
        `;
    });
    const html = `
    <ul class="product">${htmlCatalogue}</ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
  }
}
const productPage = new Products();
productPage.render();
