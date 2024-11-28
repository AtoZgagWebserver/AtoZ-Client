import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
          <QuizTitle>인도는 몇시일까요?</QuizTitle>
          <AnswerInput />
          <br />
          <SubmitBtn>제출</SubmitBtn>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Quiz;
