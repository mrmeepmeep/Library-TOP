dialog = document.querySelector("dialog")
let div = document.createElement("div")
div.classList.add("book-container")
let container = document.querySelector(".container-content")
container.appendChild(div)
form = document.querySelector("form")


// Buttons

openBtn = document.querySelector("#open")
openBtn.addEventListener("click", (e) => {
    e.preventDefault()
    dialog.showModal()
})

let submitBtn = document.querySelector("#submitBtn")
 submitBtn.addEventListener("click",(e) => {
    e.preventDefault()
    addBookToLibrary()
    dialog.close()
    form.reset()
 })

let closeBtn = document.querySelector("#close")
closeBtn.addEventListener("click", (e) => {
e.preventDefault()
    dialog.close()
})


// Add new book to the library
myLibrary = []

 function addBookToLibrary() {
    let book = document.querySelector("#book").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    if (book === "" || author === '' || pages === ""){
        return false
    }
    let html = `        <div class="card">
    <button id="deleteBtn">X</button>
    <div class="card-info">
        <span class="title">Book</span>
        <span>${book}</span>
    </div>
    <div class="card-info">
        <span class="title">Author</span>
        <span>${author}</span>
    </div>
    <span class="pages">${pages} Pages</span>
</div>`
    
div.insertAdjacentHTML("beforeend", html)
myLibrary.push()
 }