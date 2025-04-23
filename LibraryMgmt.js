// Parent Class
//Step 1: Create a Base Class
class LibraryItem{

    constructor(id, title, isAvailable)
    {
        this.id = id;
        this.title = title;
        this.isAvailable = isAvailable;
        this.checkout = function (){
            this.isAvailable = false;
        };
        this.returnItem = function(){
           this.isAvailable = true;
        };
        
    }
}

//Step 2: Extend the Base Class
// Child Class 1
class Book extends LibraryItem
{
    constructor(id,title,isAvailable,genre, author)
    {
        super(id,title,isAvailable);
        this.genre = genre;
        this.author = author;
    }

    fetchBookList()
    {
        let bookList = [
            { genre: 'Romance',title:'Pride and Prejudice' ,author: 'Jane Austen'},
            {genre: 'Mystery',title:'The Locked Room by Edgar',author: 'Allan Poe'},
            {genre:  'Fantasy',title:'The Hobbit', author:'J.R.R. Tolkien'},
            {genre: 'Science Fiction',title: 'Dune',author:'Frank Herbert'},
                     
       ]
       return bookList;
    }
}

// Child Class 2
class DVD extends LibraryItem
{

    constructor(id,title,isAvailable,director, duration,priceperday)
    {
        super(id,title,isAvailable);
        this.director = director;
        this.duration = duration;
        this.priceperday = priceperday;
    }
}

// Child Class 3
class Magazine extends LibraryItem
{
    constructor(id,title,isAvailable,issueNumber, publisher)
    {
        super(id,title,isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

//Step 3: Instantiate Objects
const book = new Book (2,"Aesop Fables",true);
book.author = "Unknown";
book.genre = "Moral Stories";

const dvd = new DVD(32,"Taken",true,0.50);
dvd.director = "Pierre Morel";
dvd.duration = 120;

const magazine = new Magazine(22,"Harpers Bazaar",false);
magazine.publisher = "Hearst Corporation";
magazine.issueNumber = 433;

//Step 4: Test the Inheritance
book.checkout();
dvd.checkout();
magazine.returnItem();

// Using the ternary operator ":" inside template literal to check for conditions.
console.log(`
    Library Items
    --------------
    Title                         Status
    ${book.title}             ${book.isAvailable? 'Available':'Checked Out'} 
    ${dvd.title}                    ${dvd.isAvailable?  'Available':'Checked Out'}
    ${magazine.title}           ${magazine.isAvailable? 'Available':'Checked Out'}
    `);

book.returnItem();

console.log(`
    Library Items
    --------------
    Title                         Status
    ${book.title}             ${book.isAvailable? 'Available':'Checked Out'} 
    ${dvd.title}                    ${dvd.isAvailable?  'Available':'Checked Out'}
    ${magazine.title}           ${magazine.isAvailable? 'Available':'Checked Out'}
    `);

// Test Unique methods
console.log(book.fetchBookList());