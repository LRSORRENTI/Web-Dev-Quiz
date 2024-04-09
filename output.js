let questions = [
  {
    question: `1. What does HTML stand for?`, 
    options: [
      `Hyper Text Markup Language`, 
      `Hyperlinks and Text Markup Language`, 
      `Hyper Text Markdown Language`, 
      `Home Tool Markup Language`, 
    ],
    correctAnswer: `Hyper Text Markup Language` 
  },
  {
    question: `2. Which HTML tag is used to define an internal style sheet?`, 
    options: [
      `<style>`, 
      `<css>`, 
      `<inline>`, 
      `<script>`, 
    ],
    correctAnswer: `<style>` 
  },
  {
    question: `3. What is the correct HTML for referring to an external style sheet?`, 
    options: [
      `<stylesheet>mystyle.css</stylesheet>`, 
      `<style src="mystyle.css">`, 
      `<inline href="mystyle.css">`, 
      `<link rel="stylesheet" type="text/css" href="mystyle.css">`, 
    ],
    correctAnswer: `<link rel="stylesheet" type="text/css" href="mystyle.css">` 
  },
  {
    question: `4. Which CSS property controls the text size?`, 
    options: [
      `font-style`, 
      `text-size`, 
      `font-size`, 
      `font-family`, 
    ],
    correctAnswer: `font-size` 
  },
  {
    question: `5. How do you make each word in a text start with a capital letter?`, 
    options: [
      `text-transform:capitalize`, 
      `text-transform:uppercase`, 
      `text-transform:lowercase`, 
      `text-transform:upper`, 
    ],
    correctAnswer: `text-transform:capitalize` 
  },
  {
    question: `6. Which property is used to change the background color?`, 
    options: [
      `bg`, 
      `color`, 
      `background-color`, 
      `background-size`, 
    ],
    correctAnswer: `background-color` 
  },
  {
    question: `7. How do you add a comment in a CSS file?`, 
    options: [
      `// this is a comment`, 
      `/* this is a comment */`, 
      `<!-- this is a comment -->`, 
      `# this is a comment`, 
    ],
    correctAnswer: `/* this is a comment */` 
  },
  {
    question: `8. What is the correct syntax for referring to an external script called "xxx.js"?`, 
    options: [
      `<script href="xxx.js">`, 
      `<script name="xxx.js">`, 
      `<script src="xxx.js">`, 
      `<script source="xxx.js">`, 
    ],
    correctAnswer: `<script src="xxx.js">` 
  },
  {
    question: `9. How do you create a function in JavaScript?`, 
    options: [
      `function = myFunction()`, 
      `function myFunction()`, 
      `function:myFunction()`, 
      `def my_Function()`, 
    ],
    correctAnswer: `function myFunction()` 
  },
  {
    question: `10. Which operator is used to assign a value to a variable?`, 
    options: [
      `:=`, 
      `=`, 
      `==`, 
      `===`, 
    ],
    correctAnswer: `=` 
  },
  {
    question: `11. What does CSS stand for?`, 
    options: [
      `Captive Style Sheets`, 
      `Creative Style Sheets`, 
      `Colorful Style Sheets`, 
      `Cascading Style Sheets`, 
    ],
    correctAnswer: `Cascading Style Sheets` 
  },
  {
    question: `12. How do you insert a comment in a HTML file?`, 
    options: [
      `<!--This is a comment-->`, 
      `//This is a comment`, 
      `/*This is a comment*/`, 
      `# This is a comment`, 
    ],
    correctAnswer: `<!--This is a comment-->` 
  },
  {
    question: `13. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?`, 
    options: [
      `title`, 
      `src`, 
      `alt`, 
      `alternative`, 
    ],
    correctAnswer: `alt` 
  },
  {
    question: `14. Which doctype is correct for HTML5?`, 
    options: [
      `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">`, 
      `<!DOCTYPE html>`, 
      `<!DOCTYPE HTML5>`, 
      `<!DOCTYPE HTMLCONTENT>`, 
    ],
    correctAnswer: `<!DOCTYPE html>` 
  },
  {
    question: `15. How do you select an element with the id "demo"?`, 
    options: [
      `.demo`, 
      `#demo`, 
      `demo`, 
      `."demo"`, 
    ],
    correctAnswer: `#demo` 
  },
  {
    question: `16. What is the default value of the position property?`, 
    options: [
      `fixed`, 
      `absolute`, 
      `static`, 
      `sticky`, 
    ],
    correctAnswer: `static` 
  },
  {
    question: `17. How do you declare a JavaScript variable?`, 
    options: [
      `var carName;`, 
      `v carName;`, 
      `variable carName;`, 
      `var: carName;`, 
    ],
    correctAnswer: `var carName;` 
  },
  {
    question: `18. Which event occurs when the user clicks on an HTML element?`, 
    options: [
      `onchange`, 
      `onclick`, 
      `onmouseover`, 
      `clicked`, 
    ],
    correctAnswer: `onclick` 
  },
  {
    question: `19. How do you round the number 7.25, to the nearest integer?`, 
    options: [
      `round(7.25)`, 
      `Math.rnd(7.25)`, 
      `Math.round(7.25)`, 
      `Math.toRound(7.25);`, 
    ],
    correctAnswer: `Math.round(7.25)` 
  },
  {
    question: `20. What is the correct way to write a JavaScript array?`, 
    options: [
      `var colors = "red", "green", "blue"`, 
      `var colors = ["red", "green", "blue"]`, 
      `var colors = (1:"red", 2:"green", 3:"blue")`, 
      `var colors = <"red", "green", "blue">`, 
    ],
    correctAnswer: `var colors = ["red", "green", "blue"]` 
  },
  {
    question: `21. What is the purpose of the async attribute in a <script> tag?`, 
    options: [
      `To prevent the script from executing until after the page has loaded`, 
      `To execute the script asynchronously with the rest of the page`, 
      `To ensure the script is executed before the page is fully loaded`, 
      `To add context to a JavaScript function`, 
    ],
    correctAnswer: `To execute the script asynchronously with the rest of the page` 
  },
  {
    question: `22. How do you implement a promise in JavaScript?`, 
    options: [
      `new Promise(function(resolve, reject) { ... })`, 
      `Promise(resolve, reject) { ... }`, 
      `promise(resolve, reject) => { ... }`, 
      `async def alpha(x): {...}`, 
    ],
    correctAnswer: `new Promise(function(resolve, reject) { ... })` 
  },
  {
    question: `23. What is the difference between localStorage and sessionStorage in HTML5?`, 
    options: [
      `localStorage persists data across sessions, while sessionStorage clears data when the session ends`, 
      `localStorage is faster than sessionStorage`, 
      `localStorage has a larger storage capacity than sessionStorage`, 
      `There is no difference, they are synonymous`, 
    ],
    correctAnswer: `localStorage persists data across sessions, while sessionStorage clears data when the session ends` 
  },
  {
    question: `24. What is a Service Worker in the context of Progressive Web Apps (PWAs)?`, 
    options: [
      `A script that runs in the background, separate from the web page, to manage caching and offline functionality`, 
      `A worker thread that performs heavy computations without blocking the main thread`, 
      `A server-side worker that handles requests and responses in a PWA`, 
      `An asynchronous function that runs in the background`, 
      `25. Explain the concept of event delegation in JavaScript.`, 
      `Creating an array of events to track code execution`, 
      `Attaching a single event listener to a parent element to handle events for multiple child elements`, 
      `Delegating events to the server for processing`, 
      `Assigning specific event listeners to each child element individually`, 
    ],
    correctAnswer: `Attaching a single event listener to a parent element to handle events for multiple child elements` 
  },
  {
    question: `26. What is the purpose of the useEffect hook in React?`, 
    options: [
      `To perform side effects in function components, such as data fetching, DOM manipulation, and setting up subscriptions`, 
      `To manage state in functional components`, 
      `To let you reference a value that's not needed for rendering`, 
      `To create reusable components`, 
      `27. Explain the difference between a container and a component in the context of React and Redux.`, 
      `A container is connected to the Redux store and dispatches actions, while a component is a presentational component that receives data as props`, 
      `A container is a higher-order component, while a component is a regular React component`, 
      `A container is only ever used in a useState hook`, 
      `There is no significant difference; the terms are interchangeable`, 
    ],
    correctAnswer: `A container is connected to the Redux store and dispatches actions, while a component is a presentational component that receives data as props` 
  },
  {
    question: `28. What is the difference between == and === in JavaScript?`, 
    options: [
      `=== is only in TypeScript, and == is only in JavaScript`, 
      `== checks for equality with type coercion, while === checks for strict equality without type coercion`, 
      `== checks for strict equality, while === checks for equality and type`, 
      `There is no difference; both operators perform the same function`, 
    ],
    correctAnswer: `== checks for equality with type coercion, while === checks for strict equality without type coercion` 
  },
  {
    question: `29. How do you handle state management in a large-scale Vue.js application?`, 
    options: [
      `By creating Boolean matrix using two-element Boolean syntax`, 
      `Using the VueX library for centralized state management`, 
      `By passing props and emitting events between components`, 
      `By using local component state and computed properties`, 
    ],
    correctAnswer: `Using the VueX library for centralized state management` 
  },
  {
    question: `30. What is the difference between SSR (Server-Side Rendering) and CSR (Client-Side Rendering) in the context of web development?`, 
    options: [
      `SSR is faster and more SEO-friendly, while CSR provides a smoother user experience`, 
      `SSR is a method of storing page renders on the client side`, 
      `SSR is primarily used for static sites, while CSR is used for dynamic web applications`, 
      `SSR renders pages on the server and sends fully rendered pages to the client, while CSR renders pages in the browser using JavaScript`, 
    ],
    correctAnswer: `SSR renders pages on the server and sends fully rendered pages to the client, while CSR renders pages in the browser using JavaScript` 
  },
];
