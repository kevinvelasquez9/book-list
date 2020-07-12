const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    if (name != "") {
        display(name);
    }
    document.getElementById("name").value = "";
});

const bookList = document.querySelector(".books");
display = (name) => {
    const node = document.createElement("div");
    node.innerHTML = name;
    node.classList.add("book");
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "X";
    removeButton.classList.add("remove");
    node.appendChild(removeButton);
    bookList.appendChild(node);
    removeBook(removeButton);
}

removeBook = (removeButton) => {
    removeButton.addEventListener("click", (e) => {
        const book = e.target.parentNode;
        book.parentNode.removeChild(book);
    })
}