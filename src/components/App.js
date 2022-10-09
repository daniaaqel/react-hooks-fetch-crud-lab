import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionArrayData, setQuestionArrayData] = useState([]);
  const [reloadCount, setReloadCount] = useState(0);

  const fetchQuestions = () => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestionArrayData(data));
  };
  const newQuestionSubmission = (postObj) => {
    fetch(`http://localhost:4000/questions`, postObj)
      .then((res) => res.json())
      .then((data) => console.log(data));
    setReloadCount((prevState) => prevState + 1);
    setPage("List");
  };
  const deleteQuestion = (deleteConfigObj, questionId) => {
    fetch(`http://localhost:4000/questions/${questionId}`, deleteConfigObj)
      .then((res) => res.json())
      .then((data) => console.log(data));
    setReloadCount((prevState) => prevState + 1);
  };
  const changeAnswer = (patchConfig, questionId) => {
    fetch(`http://localhost:4000/questions/${questionId}`, patchConfig)
      .then((res) => res.json())
      .then((data) => console.log(data));
    setReloadCount((prevState) => prevState + 1);
  };
  useEffect(() => {
    fetchQuestions();
  }, [reloadCount]);
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onFormSubmit={newQuestionSubmission} />
      ) : (
        <QuestionList
          questions={questionArrayData}
          onDeleteQuestion={deleteQuestion}
          onAnswerChange={changeAnswer}
        />
      )}
    </main>
  );
}

export default App;