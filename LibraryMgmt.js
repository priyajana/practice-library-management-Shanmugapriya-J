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
    constructor(genre, author)
    {
        this.genre = genre;
        this.author = author;
    }
}

// Child Class 2
class DVD extends LibraryItem
{

    constructor(director, duration)
    {
        this.director = director;
        this.duration = duration;
    }
}

// Child Class 3
class Magazine extends LibraryItem
{
    constructor(issueNumber, publisher)
    {
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

//Step 3: Instantiate Objects
const book = new LibraryItem (2,"Aesop Fables",true);
book.author = "Unknown";
book.genre = "Moral Stories";

const dvd = new LibraryItem(32,"Taken",true);
dvd.director = "Pierre Morel";
dvd.duration = 120;

const magazine = new LibraryItem(22,"Harpers Bazaar",false);
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