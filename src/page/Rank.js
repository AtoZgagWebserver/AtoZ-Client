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
  ul {
    width: 100%;
  }
  li {
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  span {
    text-align: center;
  }
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

const Rank = () => {
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
        <ul>
          <li>
            <span>1</span>
            <span>ID</span>
            <span>score</span>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};
export default Rank;
