const f = document.querySelector("form");
const showCards = document.querySelector(".showCards")
const books = []

f.addEventListener("submit", (e) =>{
    e.preventDefault()
    const bookname = e.target.bookname.value
    const author = e.target.author.value
    const pages = e.target.pages.value
    const checkbox = e.target.checkbox.checked
    const bookData = {bookname,author, pages,checkbox}

    if(!bookname.trim() || !author.trim() || !pages.trim() ){
            return alert("makade poora form fill kr")
    }


    books.push(bookData)
    displayBooks(books)
    e.target.reset();

})

function displayBooks(books){
    books.map((b,i) => {

        document.getElementById("bookName").innerHTML = b.bookname;
        document.getElementById("author").innerHTML = b.author;
        document.getElementById("pages").innerHTML = b.pages;
        document.getElementById("read").innerHTML = b.checkbox ? "Read" : "not Read";
        return showCards
        
        // return `<div>
        // <h1>${b.bookname}</h1>
        // <p>${b.author}</p>
        // <p>${b.pages}</p>
        // <p>${b.checkbox ? "Read" : "not read"}</p>
        // </div>`
    })
    console.log(books)
    
}

// displayBooks(books)