import styled from "styled-components";

import { httpFetchNews } from "../utils/http";
import { useNavigate } from "react-router-dom";

const ContainerDiv = styled.div`
  height: 100%;
  width: 80%;
`;

const StyledForm = styled.form`
  width: 80%;
  height: 60vh;
  background-color: lightgray;
  margin: 10%, auto;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Section = styled.div`
  display: flex;
  height: 2rem;
  gap: 2rem;
  width: 70%;
`;

const SectionElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  gap: 10%;
`;

const InputSm = styled.input`
  width: 40%;
`;

const Label = styled.label`
  width: 10%;
`;

const StyledSubmit = styled.button`
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  float: right;
`;

export default function FetchNews() {
  const navigate = useNavigate();

  async function handleOnSubmit(event) {
    event.preventDefault();

    //validatedata()
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    try {
      await httpFetchNews(formData);
      navigate("/news");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <ContainerDiv>
      <StyledForm onSubmit={handleOnSubmit}>
        <Section>
          <SectionElement>
            <Label htmlFor="q">Topic</Label>
            <InputSm id="q" type="text" name="q" />
          </SectionElement>
        </Section>
        <StyledSubmit>Submit</StyledSubmit>
      </StyledForm>
    </ContainerDiv>
  );
}
