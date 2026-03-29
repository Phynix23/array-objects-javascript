function calculateTotal() {
  let order = {
    customer: "Amina",
    items: [
      { name: "Laptop", price: 1500000, quantity: 1 },
      { name: "Mouse", price: 5000, quantity: 2 },
      { name: "Keyboard", price: 10000, quantity: 1 }
    ]
  };

  // print customer name
  console.log(`Customer: ${order.customer}`);

  // calculate total cost of the order
  let totalCost = 0;
  for (let i = 0; i < order.items.length; i++) {
    totalCost += order.items[i].price * order.items[i].quantity;
  }

  console.log(`${order.customer}'s total cost of the order is: ₦${totalCost}`);
  return totalCost;
}
calculateTotal();