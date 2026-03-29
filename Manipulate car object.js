function manipulateCar() {
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2019,
        price: 5500000
    };
    
    // Print brand and price using dot notation
    console.log("Brand:", car.brand);
    console.log("Price:", car.price);
    
    // Change the price
    car.price = 4800000;
    
    // Add new property
    car.color = "white";
    
    // Print updated object
    console.log("Updated car:", car);
    return car;
}
manipulateCar();