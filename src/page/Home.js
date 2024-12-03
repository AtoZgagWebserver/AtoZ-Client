import styled from "styled-components";
import image from "../img/img1.jpg";
import { useNavigate } from "react-router-dom";

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
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 70vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); 
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

  img {
    max-width: 80%;
    max-height: 60%;
    object-fit: contain;
    border-radius: 15px;
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
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #6c5ce7;
      transform: translateY(-5px);
    }
  }

  span {
    margin-top: 10px;
    font-size: clamp(10px, 2vw, 14px);
    color: #7f8c8d;
  }
`;

const Rank = styled.span`
  position: absolute;
  font-size: 30px;
  top: 20px;
  right: 65px;
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

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Rank onClick={() => navigate("/rank")} className="material-symbols-outlined">
        star
      </Rank>
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
        <Context>
          <img src={image} alt="Home" />
          <p
            onClick={() => {
              navigate("quiz");
            }}
          >
            시작하기
          </p>
          <span>60초 동안 최대한 많은 문제를 풀어보세요!</span>
        </Context>
      </Container>
    </Wrapper>
  );
};

export default Home;
