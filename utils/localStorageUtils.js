class LocalStorageUtils {
  constructor(obj) {
    this.keyname = obj;
  }
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyname);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;

    const index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }
    localStorage.setItem(this.keyname, JSON.stringify(products));
    return { pushProduct, products };
  }
}

const localStorageUtils = new LocalStorageUtils("products");
const localStorageUtilsCompare = new LocalStorageUtils("compare");
const localStorageUtilsFavorite = new LocalStorageUtils("favorites");
