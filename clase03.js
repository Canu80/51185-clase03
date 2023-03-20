class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return console.log(`Todos los campos son obligatorios.`);
    }
    let codeExists = this.products.some((producto) => producto.code === code);

    if (codeExists) {
      console.log('--------------------- Filtrando al producto que repite el campo "code" -------------------------');
      return  console.log(`El código “${code}” ya está en uso.`);
    } else {
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
      this.products.push(product);
    }
    return this.products;
  }

  getProductById(id_producto) {
    let productById = this.products.find(
      (producto) => producto.id === id_producto
    );

    if (productById) {
      return productById;
    } else {
      return console.log("not found");
    }
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
  "abc124",
  "40"
);
productManager.addProduct(
  "producto prueba 03",
  "Este es un producto prueba",
  "350",
  "Sin imagen",
  "abc123",
  "40"
);
console.log('--------------------- Trayendo todos los products que aprueban todas las condiciones -------------------------');

console.log(productManager);

console.log('--------------------- Utilizando el método "getProductById" -------------------------');

console.log(productManager.getProductById(1));
