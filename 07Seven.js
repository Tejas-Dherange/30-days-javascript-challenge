// Task 1,2,3,4,7
let Book = {
  title: "Atomic Habits",
  author: "James clear",
  year: 1986,
  display(title, author) {
    return `Title ${this.title} and author is ${this.author}`;
  },
  update: function (year) {
    this.year = year;
  },
};
console.log(Book);
console.log(Book.title);
console.log(Book.author);
console.log(Book.display());
Book.update(1990);
console.log(Book);

//Task 5
let library = {
  Books: [
    {
      title: "Atomic Habits",
      author: "James clear",
    },
    {
      title: "abc",
      author: " clear",
    },
    {
      title: "XYZ",
      author: "James ",
    },
  ],
  name: {
    one: "Think and Grow rich",
    two: "Rich dad poor dad",
  },
};
console.log(library);
console.log(library.Books);
console.log(library.name.one);
library.Books.forEach(book => {
    console.log(book.title);
});

// Task 8
let book1={
    title: "Atomic Habits",
    author: "James clear",
    year: 1986,
}
for(const value in book1) {
        const element = book1[value];
   console.log(element);
}
console.log(Object.keys(book1));
console.log(Object.values(book1));