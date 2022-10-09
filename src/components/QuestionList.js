import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onAnswerChange }) {
  const questionLi = questions.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        onDeleteQuestion={onDeleteQuestion}
        onAnswerChange={onAnswerChange}
      />
    );
  });
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.length ? questionLi : <h1>No Questions</h1>}</ul>
    </section>
  );
}

export default QuestionList;