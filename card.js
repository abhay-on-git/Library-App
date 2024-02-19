const f = document.querySelector("form");
const cardContainer = document.querySelector(".card-container");

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


    displayBooks(bookData)
    e.target.reset();

})

function displayBooks(b){

        const card = document.createElement("div");
        card.className = "showCards";

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
        removeBtn.onclick = ()=>{
            cardContainer.removeChild(card);
        };

        card.appendChild(bookName);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(removeBtn);
        cardContainer.appendChild(card);

}