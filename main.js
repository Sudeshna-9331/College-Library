// Constructor
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}



// Display  Constructor
function display() {

}

// Add methods to display prototype
let i=0
display.prototype.add = function (Book) {
    tableBody = document.getElementById("tableBody")
    let uiString = `<tr>
                        <th scope="row">${i+=1}</th>
                        <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>${Book.type}</td>
                    </tr>`
    tableBody.innerHTML += uiString;
}

//Set table in local storage
////let libraryForm=document.getElementById("libraryForm");

//libraryForm.addEventListener("submit",function(e){
    //console.log("set");
    //tableBody=localStorage.getItem("tableBody");
    
   // if(tableBody==null){
        //tableElement=[];
    //}
    //else{
        //tableElement=JSON.parse(tableBody);
    //}
    //console.log(tableElement)
    
    //tableElement.push(tableBody);
    //localStorage.setItem("tableBody",JSON.stringify(tableElement));
//})


//clear
display.prototype.clear = function () {
     libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
//validate
display.prototype.validate = function (Book) {
    if(Book.name.length==0 || Book.author.length==0){
        return false;

    }
    else{
        return true;
    }
    
}
//show
display.prototype.show = function (type,displayMessage) {
    let message=document.getElementById('message');
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong></strong>${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function(){
        message.innerHTML="";
        
    }, 5000);
}





// Add submit event listener to libraryForm
libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log("Submitted")


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
    let Book = new book(name, author, type)
    //console.log(Book)

    let Display = new display();
    if(Display.validate(Book)){
        Display.add(Book);
        Display.clear();
        Display.show("success","  yaaaahh! Successfully added...");

    }
    else{
        //Show error
        Display.show("danger","  Sorry! You can not add this book...");
    }
    e.preventDefault();
}