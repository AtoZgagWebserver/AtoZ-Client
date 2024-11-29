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
  background-color: #dcdde1;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 70vh;
`;

const QuizTitle = styled.h1`
  width: 100%;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
`;

const AnswerInput = styled.input`
  margin-left: 30%;
  width: 40%;
  height: 60px;
  border: 1px solid black;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
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
`;

const Home = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 65px;
  cursor: pointer;
`;

const Logout = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 20px;
  cursor: pointer;
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

  const currentQuestion = quizzes[currentQuestionIndex];

  return (
    <Wrapper>
      <Home onClick={() => navigate("/")} className="material-symbols-outlined">
        home
      </Home>
      <Logout
        onClick={() => {
          navigate("/login");
          localStorage.removeItem("isAuthenticated");
        }}
        className="material-symbols-outlined"
      >
        logout
      </Logout>
      <Container>
        <div style={{ width: "100%" }}>
          {currentQuestion ? (
            <>
              <QuizTitle>{currentQuestion.question}</QuizTitle>
              <AnswerInput
                type="text"
                value={userAnswers[currentQuestionIndex] || ""}
                onChange={(e) => handleAnswerChange(e.target.value)}
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
