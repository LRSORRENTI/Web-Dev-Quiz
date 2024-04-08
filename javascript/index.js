"use strict";
console.log('Hello world');
var questions = [];
function addQuestion(questionText, optionsArray, correctAnswer) {
    var questionObject = {
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
