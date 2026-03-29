function validateWordLengths() {
    const words = [
        { word: "JavaScript", length: 10 },
        { word: "Python", length: 6 },
        { word: "Coding", length: 5 },
        { word: "Hello", length: 5 },
        { word: "World", length: 6 }
    ];
    
    let results = [];
    
    for (let i = 0; i < words.length; i++) {
        const actualLength = words[i].word.length;
        const storedLength = words[i].length;
        
        if (actualLength === storedLength) {
            console.log(`"${words[i].word}" → Correct`);
            results.push({ word: words[i].word, status: "Correct" });
        } else {
            console.log(`"${words[i].word}" → Wrong (expected ${storedLength}, got ${actualLength})`);
            results.push({ word: words[i].word, status: "Wrong", expected: storedLength, got: actualLength });
        }
    }
    
    return results;
}
validateWordLengths();