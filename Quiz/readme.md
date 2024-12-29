# Quiz Game Application 🏏📚🎮

## Problem Statement 📜
Develop an interactive quiz game where users answer randomly selected cricket-related trivia questions. Each game session includes 5 unique questions with multiple-choice options. At the end of the quiz, users receive their score based on correct answers. The quiz should have an intuitive UI and support unique question selection without repetition in a single session.

---

## Features ✨
- **Randomized Question Selection**: Each game generates 5 unique questions using the most efficient algorithm. 
- **Interactive UI**: Questions are dynamically rendered, and users select answers via radio buttons.
- **Immediate Feedback**: Displays the number of correct answers after submission.
- **Optimized Performance**: Ensures random question selection with O(n) time complexity for the worst case.
- **Extensibility**: Easy to add more questions without altering core functionality.

---

## Approach 🚀

### 1. **Random Question Selection**
- Implemented the Fisher-Yates Shuffle Algorithm to select 5 random questions without repetition.
- Avoids the overhead of sorting (O(n log n)) or using a Set for uniqueness, which can be less optimal due to added complexity and slower operations. Sorting, for instance, introduces additional computational steps that aren't necessary for randomizing an array. Using a Set, while effective for ensuring uniqueness, adds memory overhead and doesn't inherently randomize the questions.

#### Fisher-Yates Shuffle Algorithm Explanation
The Fisher-Yates Shuffle is a widely-used algorithm for generating a random permutation of an array. It is efficient and operates in O(n) time complexity, making it ideal for shuffling large arrays. Below is a step-by-step breakdown of the algorithm:

1. **Initialization**: Start with an array containing all elements to shuffle.
2. **Iterative Random Swapping**:
   - For each position `i` from the end of the array to the beginning, generate a random index `j` between `0` and `i`.
   - Swap the elements at indices `i` and `j`.
3. **Shrinking the Effective Array**: After each swap, reduce the effective array size by excluding the last processed element.
4. **Result**: The array is shuffled in place without requiring additional memory.

---

### 2. **Dynamic Question Rendering**
- **HTML Structure**: Questions and options are dynamically created and appended to the form using JavaScript.
- **Form Elements**:
  - `label` and `radio` inputs for each option.
  - Submit button for result evaluation.

### 3. **Answer Validation**
- Stored correct answers in an `originalAns` object for easy lookup.
- Used `FormData` to collect user responses and compared them against the correct answers.

### 4. **Result Display**
- Displayed the number of correct answers dynamically below the form upon submission.

---

## Code Walkthrough 🖥️
### Key Sections
1. **Question Bank**:
   - 20 cricket-related trivia questions are stored as objects.
   - Each object contains a question, four options, and the correct answer.

2. **Random Question Function**:
   ```javascript
   function randomQuestion() {
      // Initialize an empty array to store the selected questions
      const arr = []; 
      let length = quizQuestions.length;

      for (let i = 0; i < 5; i++) {
         // Generate a random index within the current length of the array
         const index = Math.floor(Math.random() * length);

         // Push the selected question to the result array
         arr.push(quizQuestions[index]);

         // Swap the selected question with the last unprocessed question
         [quizQuestions[index], quizQuestions[length - 1]] = [quizQuestions[length - 1], quizQuestions[index]];

         // Reduce the effective size of the array to exclude the already processed question
         length--;
      }

      // Return the array of 5 unique, shuffled questions
      return arr;
   }
   ```

3. **Dynamic Form Rendering**:
   ```javascript
   problem.forEach((obj, index) => {
      const div_element = document.createElement('div');
      div_element.setAttribute('class', 'question');

      const para = document.createElement('p');
      para.textContent = `${index + 1}. ${obj.question}`;
      div_element.appendChild(para);

      obj.options.forEach((data) => {
         const label = document.createElement('label');
         const input = document.createElement('input');
         input.type = "radio";
         input.name = `q${index + 1}`;
         input.value = data;
         label.appendChild(input);
         label.appendChild(document.createTextNode(data));
         div_element.appendChild(label);
         div_element.appendChild(document.createElement('br'));
      });
      form.appendChild(div_element);
   });
   ```

4. **Result Calculation**:
   ```javascript
   form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);

      let result = 0;
      for (let key of data.keys()) {
         if (data.get(key) === originalAns[key]) {
            result++;
         }
      }

      const output = document.createElement('div');
      output.setAttribute('class', 'result');
      output.textContent = `${result} out of 5 is Correct`;
      form.appendChild(output);
   });
   ```

---

## Funny Trivia Moments 😂
- Who is known as "The Wall"? 🧱 (Hint: It's not a building!)
- Which bowler made batsmen "see stars"? 🌟
- The fastest bowler in history? He might have clocked a speeding ticket! 🚓

---

## How to Run 🛠️
1. Copy the code into an HTML file with a linked JavaScript file.
2. Open the file in any modern browser.
3. Take the quiz and enjoy! 🏏🎉

---

## Future Improvements 🌟
- Add a **Reset Button** for replaying the quiz.
- Implement a **Leaderboard** to track scores.
- Add **Timer Functionality** for a time-bound quiz experience.
- Enable **Backend Integration** to store user results.

---

## Credits 🙌
This fun quiz game was built with love for cricket and coding! 🏏💻
