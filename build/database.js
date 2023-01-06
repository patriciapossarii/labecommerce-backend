"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.products = exports.users = exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = void 0;
const types_1 = require("./types");
function createUser(id, email, password) {
    const newUser = {
        id,
        email,
        password
    };
    exports.users.push(newUser);
    console.log("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, brand, price, category) {
    const newProduct = {
        id,
        name,
        brand,
        price,
        category
    };
    exports.products.push(newProduct);
    console.log("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    for (var prod of exports.products) {
        if (prod.id === idToSearch) {
            return prod;
        }
    }
    return undefined;
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    for (var prod of exports.products) {
        if (prod.name.toLowerCase().includes(q.toLowerCase())) {
            return prod;
        }
    }
    return undefined;
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    exports.purchase.push(newPurchase);
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(q) {
    let filterPurchaseID = exports.purchase.filter((purchaseById) => {
        if (purchaseById.userId === q) {
            return exports.purchase;
        }
    });
    if (filterPurchaseID != null && filterPurchaseID.length > 0) {
        return filterPurchaseID;
    }
    else {
        return undefined;
    }
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
exports.users = [
    {
        id: "user1",
        email: "user1@email.com",
        password: "*****"
    }, {
        id: "user2",
        email: "user2@email.com",
        password: "*****"
    }
];
exports.products = [
    {
        id: "prod1",
        name: "Pen Drive 32 GB",
        brand: "Sandisk",
        price: 53,
        category: types_1.PRODUCT_CATEGORY.PEN_DRIVE
    },
    {
        id: "prod2",
        name: "Headset USB",
        brand: "Logitech",
        price: 220,
        category: types_1.PRODUCT_CATEGORY.HEADSET
    }
];
exports.purchase = [
    {
        userId: "user1",
        productId: "prod2",
        quantity: 2,
        totalPrice: exports.products[1].price * 2
    },
    {
        userId: "user1",
        productId: "prod1",
        quantity: 3,
        totalPrice: exports.products[0].price * 3
    },
    {
        userId: "user2",
        productId: "prod1",
        quantity: 2,
        totalPrice: exports.products[0].price * 2
    }
];
//# sourceMappingURL=database.js.map