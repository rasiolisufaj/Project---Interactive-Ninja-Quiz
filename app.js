const correctAnswers = ["A", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

/*1st step: we have attached an event listener to the form to listen for the submit event,
then we have prevented the default action,
we have set a local variable score = 0 to begin with, 
then we have got the user answers from each input field ==> 
form.q1.value, (form.q1.value = [value = 'A', value = 'B'])
then we have cycled through each answer and for each answer we also have got the index of the correctnAswers,
then we have compared that answer with the equivalent index in the correctAnswers array.
if they are the same we have added 25 to the score*/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show result on page
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// setTimeout(() => {
//   alert("hello, ninjas");
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//   console.log("Hello");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
