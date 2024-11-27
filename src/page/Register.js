import { useState } from "react";
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

const SubmitForm = styled.form`
  width: 45vw;
  height: 50vh;
  background-color: white;
  padding-top: 10vh;
  border-radius: 50px;
  h1 {
    margin-left: 10%;
    color: #8c7ae6;
    font-weight: bold;
    font-size: 45px;
    margin-bottom: 30px;
  }
  input {
    background-color: #f5f6fa;
    font-weight: bold;
    font-size: 13px;
    margin-left: 10%;
    border: none;
    border-radius: 20px;
    padding-left: 15px;
    width: 80%;
    height: 60px;
    margin-bottom: 20px;
  }
  p {
    color: gray;
    padding-left: 10%;
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
  }
`;

const Register = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "id") {
      setId((prev) => value);
    } else if (name === "password") {
      setPassword((prev) => value);
    } else if (name === "password2") {
      setPassword2((prev) => value);
    }
  };

  return (
    <Wrapper>
      <SubmitForm>
        <h1>회원 가입</h1>
        <input
          required
          onChange={onChange}
          placeholder="아이디"
          name="id"
          value={id}
          type="text"
        />
        <br />
        <input
          required
          onChange={onChange}
          placeholder="비밀번호"
          name="password"
          value={password}
          type="text"
        />
        <br />
        <input
          required
          onChange={onChange}
          placeholder="비밀번호 확인"
          name="password2"
          value={password2}
          type="text"
        />
        <input
          type="submit"
          value={"로그인"}
          style={{
            backgroundColor: "#8c7ae6",
            color: "white",
            textAlign: "center",
          }}
        />
        <p
          onClick={() => {
            navigate("/login");
          }}
        >
          이미 계정이 있으신가요?
        </p>
      </SubmitForm>
    </Wrapper>
  );
};
export default Register;
