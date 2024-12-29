obj1 = {
   question: "Who has the most centuries in international cricket?",
   options: ["Sachin Tendulkar", "virat Kohli", "Ricky Ponting", "Jacque Kallis"],
   answer: "Sachin Tendulkar"
}

obj2 = {
   question: "Who won the first ICC Cricket World Cup?",
   options: ["West Indies", "Australia", "India", "England"],
   answer: "West Indies"
}

obj3 = {
   question: "Who is the highest wicket-taker in Test cricket?",
   options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
   answer: "Muttiah Muralitharan"
}

obj4 = {
   question: "Which cricketer is known as 'The Wall'?",
   options: ["Rahul Dravid", "Sachin Tendulkar", "Brian Lara", "Jacques Kallis"],
   answer: "Rahul Dravid"
}

obj5 = {
   question: "Who has the highest individual score in a Test innings?",
   options: ["Brian Lara", "Matthew Hayden", "Virender Sehwag", "Don Bradman"],
   answer: "Brian Lara"
}

obj6 = {
   question: "Which country has won the most ICC T20 World Cups?",
   options: ["India", "West Indies", "Australia", "Pakistan"],
   answer: "West Indies"
}

obj7 = {
   question: "Who is the fastest bowler in cricket history?",
   options: ["Shoaib Akhtar", "Brett Lee", "Jeff Thomson", "Mitchell Starc"],
   answer: "Shoaib Akhtar"
}

obj8 = {
   question: "Who has the most runs in a single ODI innings?",
   options: ["Rohit Sharma", "Martin Guptill", "Chris Gayle", "Virender Sehwag"],
   answer: "Rohit Sharma"
}

obj9 = {
   question: "Which cricketer has the most sixes in international cricket?",
   options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "Brendon McCullum"],
   answer: "Chris Gayle"
}

obj10 = {
   question: "Who has the best bowling figures in an ODI match?",
   options: ["Chaminda Vaas", "Glenn McGrath", "Muttiah Muralitharan", "Anil Kumble"],
   answer: "Chaminda Vaas"
}

obj11 = {
   question: "Which team has won the most ICC Champions Trophy titles?",
   options: ["India", "Australia", "South Africa", "Sri Lanka"],
   answer: "India"
}

obj12 = {
   question: "Who is the only cricketer to score 100 international centuries?",
   options: ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Kumar Sangakkara"],
   answer: "Sachin Tendulkar"
}

obj13 = {
   question: "Who has the most wickets in a single World Cup tournament?",
   options: ["Mitchell Starc", "Glenn McGrath", "Muttiah Muralitharan", "Shane Warne"],
   answer: "Glenn McGrath"
}

obj14 = {
   question: "Which cricketer has the highest batting average in Test cricket?",
   options: ["Don Bradman", "Steve Smith", "Kane Williamson", "Joe Root"],
   answer: "Don Bradman"
}

obj15 = {
   question: "Who is the youngest cricketer to score a century in international cricket?",
   options: ["Shahid Afridi", "Sachin Tendulkar", "Mohammad Ashraful", "Usman Ghani"],
   answer: "Shahid Afridi"
}

obj16 = {
   question: "Which country hosted the first ever Day/Night Test match?",
   options: ["Australia", "England", "India", "South Africa"],
   answer: "Australia"
}

obj17 = {
   question: "Who has the most catches in Test cricket as a fielder?",
   options: ["Rahul Dravid", "Ricky Ponting", "Jacques Kallis", "Mahela Jayawardene"],
   answer: "Rahul Dravid"
}

obj18 = {
   question: "Which cricketer has the most double centuries in Test cricket?",
   options: ["Don Bradman", "Kumar Sangakkara", "Brian Lara", "Virat Kohli"],
   answer: "Don Bradman"
}

obj19 = {
   question: "Who is the first cricketer to score a double century in ODI cricket?",
   options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
   answer: "Sachin Tendulkar"
}

obj20 = {
   question: "Which team has won the most ICC Cricket World Cups?",
   options: ["Australia", "India", "West Indies", "England"],
   answer: "Australia"
}


// Objects containing quiz questions, options, and answers
const quizQuestions = [
   obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10,
   obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20
];

// Function to generate 5 random questions using Fisher-Yates Shuffle
function randomQuestion() {
   const arr = [];
   let length = quizQuestions.length;

   // Loop to pick 5 random questions
   for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * length); // Generate random index
      arr.push(quizQuestions[index]); // Add selected question to the array

      // Swap selected question with the last unselected one to avoid repetition
      [quizQuestions[index], quizQuestions[length - 1]] = [quizQuestions[length - 1], quizQuestions[index]];
      length--; // Reduce available length for next iteration
   }
   return arr;
}

// DOM elements
const form = document.querySelector('form'); // Quiz form element
let question = randomQuestion(); // Generate 5 random questions
let originalAns = {}; // Object to store the correct answers for each question

// Function to insert quiz questions and options into the form
function insertElements(problem) {
   problem.forEach((obj, index) => {
      // Create a container for each question
      const div_element = document.createElement('div');
      div_element.setAttribute('class', 'question');

      // Store the correct answer for the current question
      originalAns[`q${index + 1}`] = obj.answer;

      // Create and append the question text
      const para = document.createElement('p');
      para.textContent = `${index + 1}. ${obj.question}`;
      div_element.appendChild(para);

      // Create radio button options for the current question
      obj.options.forEach((data) => {
         const label = document.createElement('label');
         const input = document.createElement('input');
         input.type = "radio"; // Radio input for selecting one option
         input.name = `q${index + 1}`; // Grouping options by question
         input.value = data; // Set value of the option
         label.appendChild(input); // Append input to label
         label.appendChild(document.createTextNode(data)); // Append option text to label
         div_element.appendChild(label); // Add label to the question container
         div_element.appendChild(document.createElement('br')); // Line break for better layout
      });
      form.appendChild(div_element); // Add the question container to the form
   });
}
insertElements(question); // Insert the initial 5 questions into the form



// create a container for buttons
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'button-container');

// Create and append the submit button
let button = document.createElement('button');
button.type = 'submit';
button.setAttribute('class', 'submit-btn');
button.textContent = "Submit";
buttonContainer.appendChild(button);

form.appendChild(buttonContainer);

// Timer elements and logic
const minute = document.getElementById('minute');
const second = document.getElementById('seconds');
let totalTime = 120; // Total time for the quiz in seconds
let timeUsed = 0; // Track elapsed time

// Function to display remaining time
function remainingTime() {
   if (timeUsed === totalTime) {
      button.click(); // Auto-submit the form when time is up
      clearInterval(id); // Stop the timer
   }

   let remainingTime = totalTime - timeUsed; // Calculate remaining time
   const remMin = Math.floor(remainingTime / 60); // Minutes left
   const remSec = Math.floor(remainingTime % 60); // Seconds left

   // Display remaining time with proper formatting
   minute.innerText = `0${remMin}`;
   second.innerText = remSec < 10 ? `: 0${remSec}` : `: ${remSec}`;

   // Change timer color based on remaining time
   if (remainingTime > 29) {
      minute.style.color = "green";
      second.style.color = "green";
   } else {
      minute.style.color = "red";
      second.style.color = "red";
   }
   timeUsed++; // Increment elapsed time
}

let id = setInterval(remainingTime, 1000); // Start the timer

// Result container for displaying the score
const output = document.createElement('div');
output.setAttribute('class', 'result');

// Event handler for form submission
let submitEvent = (event) => {
   event.preventDefault(); // Prevent form submission from reloading the page

   const data = new FormData(form); // Collect selected answers from the form

   let result = 0; // Initialize score
   for (let key of data.keys()) { // Loop through submitted answers
      if (data.get(key) === originalAns[key]) { // Check if the answer is correct
         result++;
      }
   }

   // Display the score
   output.textContent = `${result} out of 5 is Correct`;
   form.appendChild(output);
   clearInterval(id); // Stop the timer

   // Disable all radio buttons after submission
   const radios = document.querySelectorAll('input[type="radio"]');
   radios.forEach(radio => {
      radio.disabled = true;
   });

   button.disabled = true; // Disable submit button
   form.removeEventListener('submit', submitEvent); // Remove event listener
};

form.addEventListener('submit', submitEvent); // Attach submit event to the form

// Create and append the restart button
const restart = document.createElement('button');
restart.type = "reset";
restart.setAttribute("id", "restartBtn");
restart.textContent = "Restart";
buttonContainer.appendChild(restart);

// Event handler for restarting the quiz
restart.addEventListener('click', (event) => {
   output.innerText = ""; // Clear the result text
   minute.innerText = ""; // Reset minute display
   second.innerText = ""; // Reset second display

   // Enable all radio buttons
   const radios = document.querySelectorAll('input[type="radio"]');
   radios.forEach((radio) => {
      radio.disabled = false;
   });

   button.disabled = false; // Enable submit button
   clearInterval(id); // Stop the timer

   totalTime = 120; // Reset timer
   timeUsed = 0;

   // Remove all displayed questions
   const Questions = document.querySelectorAll('.question');
   Questions.forEach((question) => {
      question.remove();
   });

   question = randomQuestion(); // Generate new set of random questions
   originalAns = {}; // Reset the correct answers object
   insertElements(question); // Insert new questions

   form.insertAdjacentElement('beforeend', buttonContainer);

   id = setInterval(remainingTime, 1000); // Restart the timer
   form.addEventListener('submit', submitEvent); // Reattach the submit event
});
