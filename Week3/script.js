const books = [
        {
            id: "0",
            imageFile: "assets/51_R-_P_9es3_L._SX331_BO1_204_203_200.jpg",
            title: "India after Gandhi by Ramachandra Guha",
            description: "A history of the Indian nation after it gained independence from the British Empire on 15 August 1947.",
            price: "Kr.300.00"
        },
        {
            id: "1",
            imageFile: "assets/51z_OT_-_Fe_L._SX331_BO1_204_203_200.jpg",
            title: "The Hobbit by J. R. R. Tolkien",
            description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien",
            price: "Kr. 500.00"
        },
        {
            id: "2",
            imageFile: "assets/815v2_Ou_IHXL._SY445.jpg",
            title: "Harry potter and the Philosopher's stone by J. K. Rowling",
            description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. It is the first novel in the Harry Potter series.",
            price: "Kr.300.00"
        },
        {
            id: "3",
            imageFile: "assets/71un7p_IUbd_L._AC_UL320_SR208_320.jpg",
            title: "Democrats and Dissenters by Ramachandra Guha ",
            description: "A major new collection of essays by Ramachandra Guha, Democrats and Dissenters is a work of rigorous scholarship on topics of compelling contemporary interest",
            price: "Kr.200.00"
        },
        {
            id: "4",
            imageFile: "assets/download_1.jpg",
            title: "The Lord of the Rings by J:R.R. Tolkien",
            description: "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. ",
            price: "Kr.200.00"
        },
        {
            id: "5",
            imageFile: "assets/image.jpg",
            title: "Alice's Adventure in the Wonderland by Lewis Caroll",
            description: "Alice's Adventures in Wonderland is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll",
            price: "Kr.200.00"
        },
        {
            id: "6",
            imageFile: "assets/51_Dp6a_AR4_HL._SX357_BO1_204_203_200.jpg",
            title: "And Then There were None By Agatha Christie",
            description: "And Then There Were None is a mystery novel by English writer Agatha Christie, widely considered her masterpiece and described by her as the most difficult of her books to write",
            price: "Kr.200.00"
        },
        {
            id: "7",
            imageFile: "assets/download.jpg",
            title: "A corner of a foreign Field by Ramachandra Guha",
            description: "C. K. Nayudu and Sachin Tendulkar naturally figure in this captivating history of cricket in India, but so too—in arresting and unexpected ways—do Mahatma Gandhi and Muhammad Ali Jinnah. The Indian careers of those great English cricketers Lord Harris and D. R. Jardine provide a window into the operations of Empire, while the extraordinary life of India's first great slow bowler, Palwankar Baloo, introduces the still-unfinished struggle against caste discrimination",
            price: "Kr.200.00"
        },
        {
            id: "8",
            imageFile: "assets/61lu_ELy_Y5f_L._SX325_BO1_204_203_200.jpg",
            title: "The Argumentative Indian By Amartya Sen",
            description: "The Argumentative Indian is a book written by Nobel Prize winning Indian economist Amartya Sen. It is a collection of essays that discuss India's history and identity, focusing on the traditions of public debate and intellectual pluralism",
            price: "Kr.200.00"
        }
        

    ];
    /*const bookImg = {
        "0" : "img/51_R-_P_9es3_L._SX331_BO1_204_203_200.jpg",
        "1" : "img/51z_OT_-_Fe_L._SX331_BO1_204_203_200.jpg",
        "2" : "img/815v2_Ou_IHXL._SY445.jpg",
        "3" : "img/71un7p_IUbd_L._AC_UL320_SR208_320.jpg",
        "4" : "img/download_1.jpg",
        "5" : "img/image.jpg",
        "6" : "img/51_Dp6a_AR4_HL._SX357_BO1_204_203_200.jpg",
        "7" : "img/download.jpg",
        "8" : "img/61lu_ELy_Y5f_L._SX325_BO1_204_203_200.jpg",
}*/

const ul= document.querySelector('ul');
function addBooks(){
    for(let i = 0; i < books.length; i++){
       
        const li = document.createElement('li');
        const title = books[i].title;

        li.innerHTML = title;
        

        const img = document.createElement('img');

        const imageFile =books[i].imageFile;

        
        

        //const bookId = books[i].id;
        //console.log(bookId);
        //const imgpath = bookImg[bookId]

        
        

        const description = books[i].description;
        const price = books[i].price;

        console.log('Title:'+' ' + title);
        console.log('Description:'+' ' + description);
        console.log('Price:' +' '+ price);

        ul.appendChild(img);
        ul.appendChild(li);

    }
};

addBooks();
    




/*const ul = document.querySelector("bookList");
    console.log(ul);

    books.forEach(function(book){
        const li = document.createElement('li');
        li.innerHTML =book.imageFile + book.id +':'+book.title +book.description + book.price;
        ul.appendChild(li);
    });*/


/*function makeList(){

var list = document.createElement('ul');
var booklist = books.length;

for(var i =0; i<booklist; ++i){
    var listItem = document.createElement('li');
    listItem.innerHTML = books[i];
    list.appendChild(listItem);
}
}*/


/*console.log(makeList());**/

/*var ul = document.createElement('ul');
document.getElementById('bookList').appendChild(ul);
books.forEach(function(name){
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += books;
});*/



