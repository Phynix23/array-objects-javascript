function createBook() {
    const book = {
        title: "The Great Gatsby",
        pages: 180,
        isAvailable: true
    };
    
    console.log("Title:", book.title);
    console.log("Pages:", book.pages);
    console.log("Is Available:", book.isAvailable);
    return book;
}
createBook();