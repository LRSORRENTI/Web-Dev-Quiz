console.log('Hello world')

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

let questions: Question[] = [];

function addQuestion(questionText: string, optionsArray: string[], correctAnswer: string) {
  const questionObject: Question = {
    question: questionText,
    options: optionsArray,
    correctAnswer: correctAnswer
  };
  questions.push(questionObject);
}

// Example usage:
addQuestion("What does HTML stand for?", ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], "Hyper Text Markup Language");
addQuestion("Which HTML tag is used to define an internal style sheet?", ["<style>", "<css>", "<script>"], "<style>");

console.log(questions);
