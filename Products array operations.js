function processProducts() {
    let products = [
        { name: "Rice", price: 3000, quantity: 50 },
        { name: "Beans", price: 1800, quantity: 30 },
        { name: "Oil", price: 2500, quantity: 20 }
    ];
    
    // Print name and price of each product
    console.log("Products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].name}: ₦${products[i].price}`);
    }
    
    // Calculate total value of all products
    let totalValue = 0;
    for (let i = 0; i < products.length; i++) {
        totalValue += products[i].price * products[i].quantity;
    }
    console.log("Total value of all products: ₦" + totalValue);
    return totalValue;
}
processProducts();