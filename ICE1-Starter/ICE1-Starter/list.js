// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let elememt  = document.getElementById(element,"thellist");

// ADD NEW ITEM TO END OF LIST
// Create element
let element =document.createElement (tagName,"li");
// Create text node
let text = document.createTextNode(data,"cream");

// Add text node to element
element.appendChild(text);
//a comment 23456
// Add element end of list
FileList.insertBefore(element, llist.firstChild);
// ADD NEW ITEM START OF LIST
// Create element
// Create text node
// Add text node to element
// Add element to list



// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup








// // ADDING ITEMS TO START AND END OF LIST
// // Get the <ul> element
// var myList = document.querySelector('ul');

// // ADD NEW ITEM TO END OF LIST
// // Create element
// var newItemEnd = document.createElement('li');
// // Create text node
// var newItemEndText = document.createTextNode('New Item End');
// // Add text node to element
// newItemEnd.appendChild(newItemEndText);
// // Add element end of list
// myList.appendChild(newItemEnd);

// // ADD NEW ITEM START OF LIST
// // Create element
// var newItemStart = document.createElement('li');
// // Create text node
// var newItemStartText = document.createTextNode('New Item Start');
// // Add text node to element
// newItemStart.appendChild(newItemStartText);
// // Add element to list
// myList.insertBefore(newItemStart, myList.firstChild);

// // All <li> elements
// var allListItems = document.querySelectorAll('li');

// // ADD A CLASS OF COOL TO ALL LIST ITEMS
// // Counter variable
// var i;
// // Loop through elements
// for (i = 0; i < allListItems.length; i++) {
//     // Change class to cool
//     allListItems[i].classList.add('cool');
// }

// // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// // h2 element
// var heading = document.querySelector('h2');
// // No. of <li> elements
// var numberOfItems = allListItems.length;
// // Content
// var headingContent = 'Buy groceries - ' + numberOfItems + ' items';
// // Update h2 using innerHTML (not textContent) because it contains markup
// heading.innerHTML = headingContent;




