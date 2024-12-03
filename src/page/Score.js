import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8c7ae6, #6f6cfc);
`;

const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 70vh;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

const ScoreTitle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  margin-top: 20px;
  padding: 0 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #8c7ae6;
  }
`;

const SubmitBtn = styled.button`
  width: 20%;
  margin-top: 20px;
  height: 50px;
  background-color: #44bd32;
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 20px;
  &:hover {
    background-color: #2d9e1e;
  }
`;

const RetryBtn = styled.button`
  width: 20%;
  margin-top: 20px;
  height: 50px;
  background-color: #8c7ae6;
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6f6cfc;
  }
`;

const Home = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
`;

const Logout = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
`;

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 };
  const [nickname, setNickname] = useState("");

  const handlePostScore = async () => {
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:10612/score", {
        nickname,
        score,
      });
      alert("제출 완료!");
      console.log("점수가 성공적으로 제출되었습니다:", response.data);
    } catch (error) {
      console.error("점수 제출 중 오류 발생:", error);
      alert("점수 제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Wrapper>
      <Home onClick={() => navigate("/")} className="material-symbols-outlined">
        home
      </Home>
      <Container>
        <div style={{ width: "100%", textAlign: "center" }}>
          <ScoreTitle>퀴즈 완료! 당신의 점수는: {score}점</ScoreTitle>
          <Input
            type="text"
            placeholder="닉네임을 입력하세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <br />
          <SubmitBtn onClick={handlePostScore}>제출</SubmitBtn>
          <RetryBtn onClick={() => navigate("/quiz")}>다시 해보기</RetryBtn>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Score;
