import styled from "styled-components";

import { httpPost } from "../utils/http";
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

const RowDiv = styled.div`
  display: flex;
  height: 2rem;
  gap: 1rem;
`;

const Label = styled.label`
  width: 10%;
`;

const InputTopic = styled.input`
  width: 0%;
`;

const Input = styled.input`
  width: 70%;
`;

const Select = styled.select`
  width: 40%;
`;

const TextArea = styled.textarea``;

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

export default function Create() {
  const navigate = useNavigate();

  async function handleOnSubmit(event) {
    event.preventDefault();

    //validatedata()
    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());
    formData.publishedAt = new Date().toISOString();
    try {
      await httpPost(formData);
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
            <Label htmlFor="topic">Topic</Label>
            <InputSm id="topic" type="text" name="topic" />
          </SectionElement>
          <SectionElement>
            <Label htmlFor="state">State</Label>
            <Select name="state" id="state">
              <option value="CA">California</option>
              <option value="FL">Florida</option>
              <option value="NV">Nevada</option>
              <option value="AZ">Arizona</option>
              <option value="TX">Texas</option>
            </Select>
          </SectionElement>
        </Section>

        <RowDiv>
          <Label htmlFor="title">Title</Label>
          <Input id="title" type="text" name="title" />
        </RowDiv>
        <RowDiv>
          <Label htmlFor="url">URL</Label>
          <Input id="url" type="text" name="url" />
        </RowDiv>
        <RowDiv>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            rows="40"
            cols="500"
            type="text"
          />
        </RowDiv>
        <RowDiv>
          <Label htmlFor="content">Content</Label>
          <TextArea
            id="content"
            name="content"
            rows="40"
            cols="500"
            type="text"
          />
        </RowDiv>
        <StyledSubmit>Submit</StyledSubmit>
      </StyledForm>
    </ContainerDiv>
  );
}
