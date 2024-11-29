import { useLocation } from "react-router-dom";
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

const ScoreTitle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;

const RetryBtn = styled.button`
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

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 };
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
          <ScoreTitle>퀴즈 완료! 당신의 점수는: {score}점</ScoreTitle>
          <RetryBtn onClick={() => navigate("/quiz")}>다시 해보기</RetryBtn>
        </div>
      </Container>
    </Wrapper>
  );
};
export default Score;
