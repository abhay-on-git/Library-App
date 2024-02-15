const f = document.querySelector("form");
const showbooks = document.querySelector(".showbooks")
const books = []

f.addEventListener("submit", (e) =>{
    e.preventDefault()
    const bookname = e.target.bookname.value
    const author = e.target.author.value
    const pages = e.target.pages.value
    const checkbox = e.target.checkbox.checked
    const book = {bookname,author, pages,checkbox}

    if(!bookname.trim() || !author.trim() || !pages.trim() ){
            return alert("makade poora form fill kr")
    }


    books.push(book)
    displayBooks(books)
    e.target.bookname.value = ""
    e.target.author.value = ""
    e.target.pages.value = ""
    e.target.checkbox.checked = false

})

function displayBooks(books){
    showbooks.innerHTML = books.map((b,i) => {
        return `<div>
        <h1>${b.bookname}</h1>
        <p>${b.author}</p>
        <p>${b.pages}</p>
        <p>${b.checkbox ? "Read" : "not read"}</p>
        </div>`
    })
    console.log(books)
    
}

// displayBooks(books)