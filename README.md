## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?    
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById("id") → selects single element by ID
getElementsByClassName("class") → selects all elements with class (HTMLCollection)
querySelector("selector") → selects first element matching CSS selector
querySelectorAll("selector") → selects all elements matching CSS selector (NodeList)
### 2. How do you create and insert a new element into the DOM?
Create and insert a new element
JavaScript
Copy code
let p = document.createElement("p");
p.textContent = "I am a new paragraph";
document.getElementById("container").appendChild(p);
### 3. What is Event Bubbling? And how does it work?
Event Bubbling
Event starts at target element and bubbles up to parent elements.
Example: click a button → button listener fires → parent listener fires.
### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation
Attach one event listener to parent to handle child elements.
Useful for performance and dynamic elements.
JavaScript
Copy code
document.getElementById("list").addEventListener("click", (e) => {
  if(e.target.tagName === "LI") console.log(e.target.textContent);
});
### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() vs stopPropagation()
preventDefault() → stops default browser action (e.g., link navigation, form submission)
stopPropagation() → stops event from bubbling up the DOM