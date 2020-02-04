class Shopping {
  handleclear() {
    ROOT_SHOPPING.innerHTML = "";
  }
  render() {
    const productsStore = localStorageUtils.getProducts();
    let htmlCatalogue = "";
    let cataloguesum = 0;

    CATALOGUE.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalogue += `
            <tr class="shopping__row">
                <td class="shopping__product-name">💲 ${name}</td>
                <td class="shopping__product-price">${parseInt(
                  price
                ).toLocaleString("en-IN")} ГРН.</td>
            </tr>`;
        cataloguesum += parseInt(price);
      }
    });

    const html = `
    <div class="shopping__wrapper">
    <div class="shopping__container">
    <div class="shopping_close" onclick="ShoppingPage.handleclear()"></div>
        <table class="shopping__table">
          ${htmlCatalogue}
          <tr class="shopping__row">
                <td class="shopping__product-name">💰 Общая стоимость товаров:</td>
                <td class="shopping__product-price">${cataloguesum.toLocaleString(
                  "en-IN"
                )} ГРН.</td>
            </tr>
        </table>
    </div>
    </div>`;
    ROOT_SHOPPING.innerHTML = html;
  }
}
const ShoppingPage = new Shopping();
const busket = document.getElementById("buskets__img");
busket.addEventListener("click", () => {
  ShoppingPage.render();
});
