// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let theList = document.getElementById("thelist");

// ADD NEW ITEM TO END OF LIST
// Create element
let newElement = document.createElement("li");
// Create text node
let newText = document.createTextNode("cream");
// Add text node to element
newElement.appendChild(newText);
// Add element to the end of the list
theList.appendChild(newElement);

// ADD NEW ITEM START OF LIST
// Create element
let newElementStart = document.createElement("li");
// Create text node
let newTextStart = document.createTextNode("sugar");
// Add text node to element
newElementStart.appendChild(newTextStart);
// Add element to the start of the list
theList.insertBefore(newElementStart, theList.firstChild);

// All <li> elements
let allListItems = document.querySelectorAll('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
let i;
// Loop through elements
for (i = 0; i < allListItems.length; i++) {
    // Change class to cool
    allListItems[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
let heading = document.querySelector('h2');
// No. of <li> elements
let numberOfItems = allListItems.length;
// Content
let headingContent = 'Buy groceries - ' + numberOfItems + ' items';
// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = headingContent;



