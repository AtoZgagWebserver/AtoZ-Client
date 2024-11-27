import styled from "styled-components";
import image from "../img/img1.jpg";
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

const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    max-width: 80%;
    max-height: 60%;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  p {
    margin-top: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 40%;
    height: 10%;
    max-height: 60px;
    min-height: 40px;
    background-color: #8c7ae6;
    color: white;
    font-weight: bold;
    font-size: clamp(14px, 2vw, 20px);
    cursor: pointer;
  }
  span {
    margin-top: 10px;
    font-size: clamp(10px, 2vw, 14px);
  }
`;
const Rank = styled.span`
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
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Rank
        onClick={() => navigate("/rank")}
        className="material-symbols-outlined"
      >
        star
      </Rank>
      <Logout
        onClick={() => navigate("/login")}
        className="material-symbols-outlined"
      >
        logout
      </Logout>
      <Container>
        <Context>
          <img src={image} />
          <p onClick={() => navigate("start")}>시작하기</p>
          <span>60초 동안 최대한 많은 문제를 풀어보세요!</span>
        </Context>
      </Container>
    </Wrapper>
  );
};
export default Home;
