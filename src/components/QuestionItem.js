import React from "react";

function QuestionItem({ question, onDeleteQuestion, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  const handleDeleteRequest = () => {
    const questionId = id;
    const deleteConfigObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    onDeleteQuestion(deleteConfigObj, questionId);
  };
  const changeAnswer = (e) => {
    const patchConfigObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        correctIndex: e.target.value,
      }),
    };
    onAnswerChange(patchConfigObj, id);
  };
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeAnswer}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteRequest}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;