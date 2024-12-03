import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #ff7e5f, #feb47b); 
`;

const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 70vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); 
  padding: 20px;
`;

const QuizTitle = styled.h1`
  width: 100%;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #2d3436;
`;

const AnswerInput = styled.input`
  margin-left: 30%;
  width: 40%;
  height: 50px;
  border: 1px solid #8c7ae6;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  transition: border 0.3s, transform 0.3s;

  &:focus {
    border-color: #6c5ce7;
    transform: translateY(-2px);
  }
`;

const SubmitBtn = styled.button`
  width: 20%;
  margin-left: 40%;
  margin-top: 30px;
  height: 50px;
  background-color: #8c7ae6;
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #6c5ce7;
    transform: translateY(-5px);
  }
`;

const Home = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

const Logout = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;

const Quiz = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:10612/quiz");
        setQuizzes(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchQuizzes();
  }, []);

  const handleAnswerChange = (value) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: value,
    }));
  };

  const handleSubmit = () => {
    const currentQuestion = quizzes[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/score", { state: { score } });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const currentQuestion = quizzes[currentQuestionIndex];

  return (
    <Wrapper>
      <Home onClick={() => navigate("/")} className="material-symbols-outlined">
        home
      </Home>
      <Container>
        <div style={{ width: "100%" }}>
          {currentQuestion ? (
            <>
              <QuizTitle>{currentQuestion.question}</QuizTitle>
              <AnswerInput
                type="text"
                value={userAnswers[currentQuestionIndex] || ""}
                onChange={(e) => handleAnswerChange(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <br />
              <SubmitBtn onClick={handleSubmit}>제출</SubmitBtn>
            </>
          ) : (
            <p>Loading questions...</p>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Quiz;
