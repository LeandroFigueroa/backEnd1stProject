class ProductManager {
  constructor() {
    this.products = [];
    this.newId = 0;
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(
        `Error 201: ${title} no posee todos los datos solicitados para su carga.`
      );
    } else {
      const codigoDuplicado = this.products.find(
        (product) => product.code === code
      );
      if (codigoDuplicado) {
        console.log(`Error 508: ${title} ya se encuentra en la base de datos.`);
      } else {
        const product = {
          id: this.generateId(),

          title: title,
          code: code,
          description: description,
          thumbnail: thumbnail,
          stock: stock,
          price: price,
        };
        this.products.push(product);
      }
    }
  }
  generateId() {
    return ++this.newId;
  }
  getProducts() {
    return this.products;
  }
  findProductById(busquedaId) {
    let find = this.products.find(
      (prodRepeat) => prodRepeat.id === busquedaId
    );
    if (find) {
      console.log(find);
    } else {
      console.log("Not found");
    }
  }
}

const getProducts = new ProductManager();
console.log(getProducts.products);

getProducts.addProduct(
  "Armagedon",
  "Pelicula",
  1500,
  "https://pics.filmaffinity.com/Armageddon-185976102-large.jpg",
  "0303456",
  13
);
getProducts.addProduct(
  "Esperando la carroza",
  "Pelicula",
  800,
  "https://pics.filmaffinity.com/Esperando_la_carroza-675954190-mmed.jpg",
  "0303457",
  15
);
getProducts.addProduct(
  "Rescatando al soldado Ryan",
  "Pelicula",
  1200,
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ccb5209c0ee6d5cf893a6599d97fc0655d8f2a5f3753cb3ea88c79474d64d887._RI_V_TTW_.jpg",
  "0303458",
  6
);
// Producto con falta de un item
getProducts.addProduct(
  "Strangers things S01",
  "Serie",
  "https://thewild.com.ar/wp-content/uploads/2018/10/stranger-things-poster-2-fondo-negro.jpg",
  "0303459",
  3
);
getProducts.addProduct(
  "Dragon ball Z",
  "Serie",
  12000,
  "https://cdn.atomix.vg/wp-content/uploads/2015/06/DragonBallSuper_Poster.jpg",
  "0303460",
  22
);
// Producto repetido
getProducts.addProduct(
  "Dragon ball Z",
  "Serie",
  12000,
  "https://cdn.atomix.vg/wp-content/uploads/2015/06/DragonBallSuper_Poster.jpg",
  "0303460",
  22
);
getProducts.addProduct(
  "Porno y Helado",
  "Mini Serie",
  2000,
  "https://es.web.img3.acsta.net/pictures/22/02/21/16/45/1358896.jpg",
  "0303461",
  12
);

console.log(getProducts.products);
// busqueda ok
getProducts.findProductById(3);
//busqueda con ID inexistente
getProducts.findProductById(10);
