import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    const productsData = await fetch(`http://localhost:7007/products`);
    const { products } = await productsData.json();

    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id);

        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            // console.log(id, addedProduct);
            initialCart.push(addedProduct);
        }
    }

    return { products, initialCart }
}