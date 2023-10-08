import { useState } from "react";
import questions from "./components/question";
import "./App.css";

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [getResult, setGetResult] = useState(false);
  const [points, setPoints] = useState(0);


  function setNextQuestion(e){
    Points(e)
    const nextQuestion = currentQuestion + 1
    if(nextQuestion<questions.length)
      setCurrentQuestion(nextQuestion)
    else
      setGetResult(true)
  }

  function Points(e){
    console.log(e)
    e ? setPoints(points + 1) : null
  }

  return (
    <div className="app">
      {getResult ? (
        <div className="score-section">
          You scored {points} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion+1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((e) => (
              <button key={e.answerText} onClick={() => setNextQuestion(e.isCorrect)}>
                {e.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
