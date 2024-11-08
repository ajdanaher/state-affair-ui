import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { httpGet } from "../utils/http";
import moment from "moment";
import { Link } from "react-router-dom";
import ReactionDialog from "./ReactionDialog";
import NewsComments from "./NewsComments";

const StyledContainer = styled.div`
  margin: 5%;
  padding: 3%;
  width: 80%;
  background-color: lightgrey;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`;

const StyledSection = styled.section`
  background-color: white;
  width: 100%;
  height: auto;
  box-shadow: 1px 2.1px 2.1px hsl(0deg 0% 0% / 0.47);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  height: 2rem;
  justify-content: space-between;
`;

const Topic = styled.div`
  font-weight: bold;
  width: 10%;
  justify-content: left;
`;
const Date = styled.div`
  font-weight: bold;
  width: 20%;
  justify-content: right;
`;

const RowDiv = styled.div``;

const Title = styled.div`
  font-size: larger;
  font-style: italic;
  padding-left: 4rem;
`;

const Description = styled.div`
  padding: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const StyledSubmit = styled.button`
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

export default function NewsDetails() {
  const param = useParams();
  const [data, setData] = useState({});
  const dialog = useRef();

  useEffect(() => {
    async function fetchRemoteData() {
      try {
        const data = await httpGet({ _id: param.id });
        setData(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchRemoteData();
  }, []);

  function showModal() {
    dialog.current.showModal();
  }

  return (
    <>
      <StyledContainer>
        <StyledSection>
          <Header>
            <Topic>{data.topic}</Topic>
            <Date>{moment(data.publishedAt).format("MM-DD-YYYY")}</Date>
          </Header>
          <RowDiv>
            <Link to={data.url}>Source</Link>
          </RowDiv>
          <Title>"{data.title}"</Title>
          <Description>{data.description}</Description>
          <Content>{data.content}</Content>
          {/* <p>{JSON.stringify(data)}</p> */}
        </StyledSection>
        <ReactionDialog ref={dialog} id={param.id} />
        <StyledSubmit onClick={showModal}>Comment</StyledSubmit>
      </StyledContainer>
      <NewsComments id={param.id} />
    </>
  );
}
