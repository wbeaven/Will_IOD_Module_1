const book1 = {
    "title" : "Dune",
    "description" : "Young boy gets high in desert and becomes terrorist",
    "author" : "Frank Herbert",
    "pages" : "412"
}
const book2 = {
    "title" : "Harry Potter",
    "description" : "Young boy goes to wizard school",
    "author" : "J.K Rowling",
    "pages" : "223"
}
const book3 = {
    "title" : "The Witcher",
    "description" : "Old young man kills monsters",
    "author" : "Andrzej Sapkowski",
    "pages" : "288"
}
const book4 = {
    "title" : "The Hunger Games",
    "description" : "Young woman fights 22 other young people",
    "author" : "Suzanne Collins",
    "pages" : "374"
}
const book5 = {
    "title" : "The Eye of the World",
    "description" : "I dunno, magic stuff maybe",
    "author" : "Robert Jordan",
    "pages" : "782"
}

book1.author = "William Beaven";

console.log(book1.title);
console.log(book1.description);
console.log(book1.author);
console.log(book1.pages);

let library = [book1, book2, book3, book4, book5];

console.log(library[2].title)