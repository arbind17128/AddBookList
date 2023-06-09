class Book {
    constructor(title,author,code) {
        this.title=title;
        this.author=author;
        this.code=code;
    }
}

class UI {
static displayBook() {
     const StoredBook=[{
        title: 'harry',
        author: 'ak',
        code: '123'
    },
    {
        title: 'love',
        author: 'Arbind',
        code: '143'

    }
 ];

const books= StoredBook ;
books.forEach((book)=> {
    UI.addBookToLisk(book)
    
 
})
}

static alertmsg(sms,clases) {
    let newDiv=document.createElement('div');
    newDiv.className=`alert alert-${clases}`;
    newDiv.appendChild(document.createTextNode(sms));
    let container=document.querySelector('.container');
    let form=document.querySelector('#book-form');
    container.insertBefore(newDiv, form);
    setTimeout(()=>document.querySelector('.alert').remove(),3000)
}



static addBookToLisk(book) {
    // console.log(typeof(book.title))
    
    var list =document.querySelector('#book-list');
    let row =document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.code}</td>
    <td><a href="#" class="btn btn-primary btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
}
static CleerFormField() {
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector('#isbn').value='';
    

}

static DeleteItem(el) {
    if(el.classList.contains('delete')) {
       confirm("are you sure you wants to delete ")
        el.parentElement.parentElement.remove();
       
    }
}


}

document.addEventListener('DOMContentLoaded', UI.displayBook);


let form=document.querySelector('#book-form');
form.addEventListener('submit', onSub);
function onSub(e) {
    e.preventDefault();
    let title=document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let code=document.querySelector('#isbn').value;
    let they =new Book(title,author,code);


    if(title==='' || author==='' || code==='') {
        UI.alertmsg('Please fill-up all the field','danger');
    }
    else{
        UI.addBookToLisk(they);
        UI.alertmsg('Book is Successfully Added','success');


     

        UI.CleerFormField()

    }

    // this code of line is to add the item of form into tr of ui.......
   
   
}

document.querySelector('#book-list').addEventListener('click', (e)=> {


    //this line of code to see the value
    // console.dir(e.target.innerText);

    UI.DeleteItem(e.target);
    UI.alertmsg('Book is Successfully Deleted','success');
})


