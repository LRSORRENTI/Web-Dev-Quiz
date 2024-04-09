type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: null | string;
};

let questions: Question[] = [
    {
        question: `1. What does HTML stand for?`, 
        options: [
          `Hyperlinks and Text Markup Language`, 
          `Hyper Text Markdown Language`, 
          `Home Tool Markup Language`, 
          `Hyper Text Markup Language`
        ],
        correctAnswer: `Hyper Text Markup Language` 
      },
      {
        question: `2. Which HTML tag is used to define an internal style sheet?`, 
        options: [
          `<css>`, 
          `<style>`,
          `<inline>`, 
          `<script>`, 
        ],
        correctAnswer: `<style>` 
      },
      {
        question: `3. What is the correct HTML for referring to an external style sheet?`, 
        options: [
          `<link rel="stylesheet" type="text/css" href="mystyle.css">`,
          `<stylesheet>mystyle.css</stylesheet>`, 
          `<style src="mystyle.css">`, 
          `<inline href="mystyle.css">`, 
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
          `text-transform:uppercase`, 
          `text-transform:capitalize`,
          `text-transform:lowercase`, 
          `text-transform:upper`, 
        ],
        correctAnswer: `text-transform:capitalize` 
      },
      {
        question: `6. Which property is used to change the background color?`, 
        options: [
          `background-color`,
          `bg`, 
          `color`, 
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
          `<script src="xxx.js">`,
          `<script href="xxx.js">`, 
          `<script name="xxx.js">`, 
          `<script source="xxx.js">`, 
        ],
        correctAnswer: `<script src="xxx.js">` 
      },
      {
        question: `9. How do you create a function in JavaScript?`, 
        options: [
          `function = myFunction()`, 
          `function:myFunction()`, 
          `def my_Function()`, 
          `function myFunction()`
        ],
        correctAnswer: `function myFunction()` 
      },
      {
        question: `10. Which operator is used to assign a value to a variable?`, 
        options: [
          `:=`, 
          `==`, 
          `===`, 
          `=` 
        ],
        correctAnswer: `=` 
      },
      {
        question: `11. What does CSS stand for?`, 
        options: [
          `Captive Style Sheets`, 
          `Creative Style Sheets`, 
          `Cascading Style Sheets`,
          `Colorful Style Sheets`, 
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
          `alternative`, 
          `alt`
        ],
        correctAnswer: `alt` 
      },
      {
        question: `14. Which doctype is correct for HTML5?`, 
        options: [
          `<!DOCTYPE html>`,
          `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">`, 
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
          `sticky`, 
          `static`
        ],
        correctAnswer: `static` 
      },
      {
        question: `17. How do you declare a JavaScript variable?`, 
        options: [
          `v carName;`, 
          `variable carName;`, 
          `var: carName;`,
          `var carName;` 
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
          `Math.round(7.25)`,
          `round(7.25)`, 
          `Math.rnd(7.25)`, 
          `Math.toRound(7.25);`, 
        ],
        correctAnswer: `Math.round(7.25)` 
      },
      {
        question: `20. What is the correct way to write a JavaScript array?`, 
        options: [
          `var colors = "red", "green", "blue"`, 
          `var colors = (1:"red", 2:"green", 3:"blue")`, 
          `var colors = <"red", "green", "blue">`, 
          `var colors = ["red", "green", "blue"]` 
        ],
        correctAnswer: `var colors = ["red", "green", "blue"]` 
      },
      {
        question: `21. What is the purpose of the async attribute in a <script> tag?`, 
        options: [
          `To prevent the script from executing until after the page has loaded`, 
          `To ensure the script is executed before the page is fully loaded`, 
          `To add context to a JavaScript function`, 
          `To execute the script asynchronously with the rest of the page` 
        ],
        correctAnswer: `To execute the script asynchronously with the rest of the page` 
      },
      {
        question: `22. How do you implement a promise in JavaScript?`, 
        options: [
          `Promise(resolve, reject) { ... }`, 
          `new Promise(function(resolve, reject) { ... })`,
          `promise(resolve, reject) => { ... }`, 
          `async def alpha(x): {...}`, 
        ],
        correctAnswer: `new Promise(function(resolve, reject) { ... })` 
      },
      {
        question: `23. What is the difference between localStorage and sessionStorage in HTML5?`, 
        options: [
          `localStorage is faster than sessionStorage`, 
          `localStorage has a larger storage capacity than sessionStorage`, 
          `There is no difference, they are synonymous`, 
          `localStorage persists data across sessions, while sessionStorage clears data when the session ends` 
        ],
        correctAnswer: `localStorage persists data across sessions, while sessionStorage clears data when the session ends` 
      },
      {
        question: `24. What is a Service Worker in the context of Progressive Web Apps (PWAs)?`, 
        options: [
          `A worker thread that performs heavy computations without blocking the main thread`, 
          `A server-side worker that handles requests and responses in a PWA`, 
          `A script that runs in the background, separate from the web page, to manage caching and offline functionality`,
          `An asynchronous function that runs in the background`, 
        ],
        correctAnswer: `A script that runs in the background, separate from the web page, to manage caching and offline functionality` 
      },
      {
        question: `25. Explain the concept of event delegation in JavaScript`, 
        options: [
            `Attaching a single event listener to a parent element to handle events for multiple child elements`,
            `Creating an array of events to track code execution`, 
            `Delegating events to the server for processing`, 
            `Assigning specific event listeners to each child element individually`, 
        ],
        correctAnswer: `Attaching a single event listener to a parent element to handle events for multiple child elements` 
       },
      {
        question: `26. Explain the difference between a container and a component in the context of React and Redux.`, 
        options: [ 
          `A container is a higher-order component, while a component is a regular React component`, 
          `A container is only ever used in a useState hook`, 
          `There is no significant difference; the terms are interchangeable`, 
          `A container is connected to the Redux store and dispatches actions, while a component is a presentational component that receives data as props` 
        ],
        correctAnswer: `A container is connected to the Redux store and dispatches actions, while a component is a presentational component that receives data as props` 
      },
      {
        question: `27. What is the purpose of the useEffect hook in React?`, 
        options: [
          `To manage state in functional components`, 
          `To perform side effects in function components, such as data fetching, DOM manipulation, and setting up subscriptions`,
          `To let you reference a value that's not needed for rendering`, 
          `To create reusable components`, 
        ],
        correctAnswer: `To perform side effects in function components, such as data fetching, DOM manipulation, and setting up subscriptions`
      },
      {
        question: `28. What is the difference between == and === in JavaScript?`, 
        options: [
          `== checks for equality with type coercion, while === checks for strict equality without type coercion`,
          `=== is only in TypeScript, and == is only in JavaScript`, 
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
          `SSR renders pages on the server and sends fully rendered pages to the client, while CSR renders pages in the browser using JavaScript`,
          `SSR is primarily used for static sites, while CSR is used for dynamic web applications`, 
        ],
        correctAnswer: `SSR renders pages on the server and sends fully rendered pages to the client, while CSR renders pages in the browser using JavaScript` 
      },
];

function addQuestion(questionText: string, optionsArray: string[], correctAnswer: string) {
  const questionObject: Question = {
    question: questionText,
    options: optionsArray,
    correctAnswer: correctAnswer
  };
  questions.push(questionObject);
}

// Example usage:
// addQuestion("What does HTML stand for?", ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], "Hyper Text Markup Language");
// addQuestion("Which HTML tag is used to define an internal style sheet?", ["<style>", "<css>", "<script>"], "<style>");
// event listener to the "Begin" button that displays the quiz container and starts the quiz
function calculateGrade(score: number, total: number) {
    const percentage = (score / total) * 100;
    if (percentage >= 90) {
      return 'A';
    } else if (percentage >= 80) {
      return 'B';
    } else if (percentage >= 70) {
      return 'C';
    } else if (percentage >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  
  document.getElementById('prev')!.onclick = () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion(currentQuestionIndex);
    }
  };
  
  document.getElementById('next')!.onclick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
    }
  };
  

document.getElementById('begin')!.onclick = () => {
    document.getElementById('overview')!.style.display = 'none';
    document.getElementById('quiz-container')!.style.display = 'block';
    displayQuestion(currentQuestionIndex);
  };
  
  let currentQuestionIndex = 0;
  let score = 0;
  const totalQuestions = questions.length;

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  function displayQuestion(index: any) {
    const question = questions[index];
     // Reset the user's answer for the current question
    question.userAnswer = null;
    document.getElementById('question')!.textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer!.innerHTML = '';
  
    // Shuffle the options
    const options = [...question.options];
    shuffleArray(options);
  
    options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => {
        // Store the user's answer immediately
        question.userAnswer = option;
      
        if (option === question.correctAnswer) {
          score++;
          document.getElementById('score')!.textContent = `Score: ${score}`;
        }
      
        if (currentQuestionIndex < totalQuestions - 1) {
          currentQuestionIndex++;
          displayQuestion(currentQuestionIndex);
        } else {
          // Display the final score and incorrect questions
          const grade = calculateGrade(score, totalQuestions);
          document.getElementById('finalScore')!.textContent = `You scored ${score}/${totalQuestions}. Your grade is: ${grade}`;
          displayIncorrectQuestions();
          document.getElementById('finalResults')!.style.display = 'block';
          document.getElementById('quiz-container')!.style.display = 'none'; // Hide the quiz container
        }
      };
  
      optionsContainer!.appendChild(button);
    });
  }
  
  function displayIncorrectQuestions() {
    const incorrectContainer = document.getElementById('incorrectQuestions');
    incorrectContainer!.innerHTML = '<h3>Incorrect Questions:</h3>';
    questions.forEach((question, index) => {
      if (question.correctAnswer !== question.userAnswer) {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
          <p>${index + 1}. ${question.question}</p>
          <p>Your answer: ${question.userAnswer || 'No answer'}</p>
          <p>Correct answer: ${question.correctAnswer}</p>
        `;
        incorrectContainer!.appendChild(questionElement);
      }
    });
  }
  

  // Start the quiz
  displayQuestion(currentQuestionIndex);