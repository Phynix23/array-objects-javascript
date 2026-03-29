function processNumbers() {
    const numbers = [
        { value: 12 },
        { value: 7 },
        { value: 24 },
        { value: 15 },
        { value: 30 }
    ];
    
    let sumOfEvens = 0;
    let evenNumbers = [];
    let oddNumbers = [];
    
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i].value;
        
        if (num % 2 === 0) {
            console.log(`${num} → even`);
            sumOfEvens += num;
            evenNumbers.push(num);
        } else {
            console.log(`${num} → odd`);
            oddNumbers.push(num);
        }
    }
    
    console.log("Sum of all even numbers:", sumOfEvens);
    console.log("Even numbers:", evenNumbers);
    console.log("Odd numbers:", oddNumbers);
    
    return { sumOfEvens, evenNumbers, oddNumbers };
}
processNumbers();