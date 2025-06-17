import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './AssignmentPage.css';

const allQuestions = {
  1: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  2: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  
  3: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  4: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  5: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  6: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  7: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  8: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  9: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  10: [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], type: "radio", correct: "4" },
    { question: "Even numbers?", options: ["1", "2", "4"], type: "checkbox", correct: ["2", "4"] },
    { question: "Which is a bird?", options: ["Dog", "Parrot", "Cat"], type: "radio", correct: "Parrot" },
    { question: "Select colors:", options: ["Blue", "Dog", "Red"], type: "checkbox", correct: ["Blue", "Red"] },
    { question: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], type: "radio", correct: "Delhi" },
    { question: "Which are fruits?", options: ["Apple", "Chair", "Banana"], type: "checkbox", correct: ["Apple", "Banana"] },
    { question: "What is 10 ÷ 2?", options: ["2", "5", "10"], type: "radio", correct: "5" },
    { question: "Which are shapes?", options: ["Circle", "Square", "Tiger"], type: "checkbox", correct: ["Circle", "Square"] },
    { question: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Cool"], type: "radio", correct: "Hot" },
    { question: "Select animals:", options: ["Lion", "Car", "Elephant"], type: "checkbox", correct: ["Lion", "Elephant"] },
    { question: "How many legs does a spider have?", options: ["6", "8", "10"], type: "radio", correct: "8" },
    { question: "Pick tools:", options: ["Hammer", "Banana", "Screwdriver"], type: "checkbox", correct: ["Hammer", "Screwdriver"] },
    { question: "What is 5 x 5?", options: ["20", "25", "30"], type: "radio", correct: "25" },
    { question: "Which are mammals?", options: ["Whale", "Frog", "Bat"], type: "checkbox", correct: ["Whale", "Bat"] },
    { question: "Which is an emotion?", options: ["Happy", "Dog", "Angry"], type: "radio", correct: "Happy" },
  ],
  
};

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const AssignmentPage = () => {
  const { classId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const all = allQuestions[classId] || [];
    const randomSubset = shuffleArray(all).slice(0, 10); // pick 10 random questions
    setQuestions(randomSubset);
  }, [classId]);

  const handleChange = (qIndex, opt) => {
    const q = questions[qIndex];
    if (q.type === "radio") {
      setSelectedAnswers({ ...selectedAnswers, [qIndex]: opt });
    } else {
      const existing = selectedAnswers[qIndex] || [];
      const newSelection = existing.includes(opt)
        ? existing.filter((item) => item !== opt)
        : [...existing, opt];
      setSelectedAnswers({ ...selectedAnswers, [qIndex]: newSelection });
    }
  };

  const isCorrect = (q, qIndex, opt) => {
    const answer = selectedAnswers[qIndex];
    if (q.type === "radio") {
      return answer === q.correct && opt === q.correct;
    } else {
      return answer?.includes(opt) && q.correct.includes(opt);
    }
  };

  return (
    <div className="assignment-container">
      <h2>Assignments for Class {classId}</h2>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <p className="question-text">{index + 1}. {q.question}</p>
          {q.options.map((opt, i) => (
            <label
              key={i}
              className={`option-label ${
                isCorrect(q, index, opt) ? "correct-option" : ""
              }`}
            >
              <input
                type={q.type}
                name={`q-${index}`}
                value={opt}
                checked={
                  q.type === "radio"
                    ? selectedAnswers[index] === opt
                    : selectedAnswers[index]?.includes(opt)
                }
                onChange={() => handleChange(index, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AssignmentPage;
