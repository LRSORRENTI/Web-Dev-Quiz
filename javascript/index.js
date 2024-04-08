"use strict";
console.log('Hello world');
var questions = [
    {
        question: 'What does HTML stand for?',
        options: [
            'Hyper Text Markup Language',
            'Hyperlinks and Text Markup Language',
            'Hyper Text Markdown Language',
            'Home Tool Markup Language'
        ],
        correctAnswer: 'Hyper Text Markup Language'
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        options: ['<style>', '<css>', '<inline>', '<script>'],
        correctAnswer: '<style>'
    }
];
function addQuestion(questionText, optionsArray, correctAnswer) {
    var questionObject = {
        question: questionText,
        options: optionsArray,
        correctAnswer: correctAnswer
    };
    questions.push(questionObject);
}
// Example usage:
// addQuestion("What does HTML stand for?", ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], "Hyper Text Markup Language");
// addQuestion("Which HTML tag is used to define an internal style sheet?", ["<style>", "<css>", "<script>"], "<style>");
console.log(questions);
