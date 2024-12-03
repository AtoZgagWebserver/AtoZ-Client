import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #6a11cb, #2575fc);
`;

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  text-align: center;
`;

const Home = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 20px;
  color: white;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

const Logout = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 30px;
  color: white;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;

// 점수 리스트 스타일
const RankList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const RankItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f1f1f1;
    transform: translateY(-5px);
  }

  &:nth-child(even) {
    background-color: #eaeaea;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  span:nth-child(1) {
    text-align: center;
    color: #3498db;
  }

  span:nth-child(2) {
    text-align: left;
  }

  span:nth-child(3) {
    text-align: right;
    color: #2ecc71;
  }
`;

const Rank = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("/score");
        if (response.ok) {
          const data = await response.json();
          setScores(data); 
        } else {
          console.error("Failed to fetch scores");
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScores();
  }, []);

  return (
    <Wrapper>
      <Home onClick={() => navigate("/")} className="material-symbols-outlined">
        home
      </Home>
      <Container>
        <RankList>
          {scores.map((score, index) => (
            <RankItem key={index}>
              <span>{index + 1}</span>
              <span>{score.nickname}</span>
              <span>{score.score}</span>
            </RankItem>
          ))}
        </RankList>
      </Container>
    </Wrapper>
  );
};

export default Rank;
