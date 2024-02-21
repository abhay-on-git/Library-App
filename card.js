const f = document.querySelector("form");
const cardContainer = document.querySelector(".card-container");
let count = 1;
let books = []; // Array to store book data

// Check if there are any books stored in localStorage
const storedBooks = localStorage.getItem('books');
if (storedBooks) {
    books = JSON.parse(storedBooks);
    // Display stored books on page load
    books.forEach(bookData => {
        displayBooks(bookData);
    });
}

f.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookname = e.target.bookname.value;
    const author = e.target.author.value;
    const pages = e.target.pages.value < 0 ? alert("Enter a valid pages") : e.target.pages.value;
    const checkbox = e.target.checkbox.checked;
    let title = `Book ${count}`;
    const bookData = { bookname, author, pages, checkbox, title };

    if (!bookname.trim() || !author.trim() || !pages.trim()) {
        return alert("makade poora form fill kr");
    }

    displayBooks(bookData);
    books.push(bookData); // Add book data to array
    saveBooksToLocalStorage(); // Save books array to localStorage
    e.target.reset();
    count = count + 1;
    f.style.display = "none";
});

function saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function displayBooks(b) {
    const card = document.createElement("div");
    card.className = "showCards";

    const title = document.createElement("h2");
    title.textContent = b.title;

    const bookName = document.createElement("div");
    bookName.className = "input";
    bookName.textContent = b.bookname;

    const author = document.createElement("div");
    author.className = "input";
    author.textContent = b.author;

    const pages = document.createElement("div");
    pages.className = "input";
    pages.textContent = b.pages;

    const read = document.createElement("div");
    read.className = "input";
    read.textContent = b.checkbox ? 'Read' : 'Not Read';

    const removeBtn = document.createElement('button');
    removeBtn.className = "button";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
        cardContainer.removeChild(card);
        // Remove book from array when removed from the DOM
        books = books.filter(book => book !== b);
        saveBooksToLocalStorage(); // Save updated books array to localStorage
    };

    card.appendChild(title);
    card.appendChild(bookName);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeBtn);
    cardContainer.appendChild(card);
}
