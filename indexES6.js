
showTable()


class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class display {
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(bookNew) {
        if (bookNew.name.length == 0 || bookNew.author.length == 0) {
            return false;

        }
        else {
            return true;
        }

    }
   
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong></strong>${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = "";
        }, 5000);
    }
}



// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {



    //Fiction,computer,cooking
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    if (fiction.checked) {
        type = document.getElementById("fiction").value;
    }
    else if (computer.checked) {
        type = document.getElementById("computer").value;
    }
    else if (cooking.checked) {
        type = document.getElementById("cooking").value;
    }
    let BookNew = new Book(name, author, type)
    //console.log(Book)



    //set item in Local Storage
    let tableBody = localStorage.getItem("tableBody");
    if (tableBody == null) {
        tableObj = [];
    }
    else {
        tableObj = JSON.parse(tableBody);
    }
    let myObj = {
        bookName: name,
        authorName: author,
        typeName: type
    }
    tableObj.push(myObj);
    let displayStorage= new display();
    if(displayStorage.validate(BookNew)){
        localStorage.setItem("tableBody", JSON.stringify(tableObj));
    }
    
    name = "";
    author = "";
    type = "";

    //Display

    let Display = new display();

    if (Display.validate(BookNew)) {
        showTable();
        Display.clear();
        Display.show("success", "  yaaaahh! Successfully added...");
    }
    else {
        //Show error
        Display.show("danger", "  Sorry! You can not add this book...");
    }
    e.preventDefault();

}




//Show table from local storage
function showTable() {
    let tableBody = localStorage.getItem("tableBody");
    if (tableBody == null) {
        tableObj = [];
    }
    else {
        tableObj = JSON.parse(tableBody);
    }

    let html = "";

    tableObj.forEach(function (element, index) {
        html += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${element.bookName}</td>
                <td>${element.authorName}</td>
                <td>${element.typeName}</td>
            </tr>`

    });

    let tableElement = document.getElementById("tableBody");
    if (tableObj.length != 0) {
        tableElement.innerHTML = html;
    }
    else {
        tableElement.innerHTML = "Nothing to add...Please add a table!";

    }

}




