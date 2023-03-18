class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let id_product = this.getProducts().length;
    
    let product = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      id: ++id_product,
    };

  }
}

const productManager = new ProductManager();

productManager.addProduct(
  "producto prueba 01",
  "Este es un producto prueba",
  "200",
  "Sin imagen",
  "abc123",
  "25"
);
productManager.addProduct(
  "producto prueba 02",
  "Este es un producto prueba",
  "350",
  "Sin imagen",
  "abc123",
  "40"
);

console.log(productManager);
