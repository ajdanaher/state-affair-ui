import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { httpGet } from "../utils/http";
import moment from "moment";
import { ColorRing } from "react-loader-spinner";

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
  width: 20%;
  height: 20rem;
  box-shadow: 1px 2.1px 2.1px hsl(0deg 0% 0% / 0.47);
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 7%;
  background-color: cornflowerblue;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 86%;
  width: 100%;
`;

const Footer = styled.footer`
  height: 7%;
  text-align: right;
  padding: 1rem;
`;

const RowFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  height: 2rem;
  text-align: center;
`;

const RowFlexDivContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  overflow: auto;
`;

export default function ListNews() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setUseLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRemoteData() {
      try {
        const data = await httpGet({});
        setUserData(data);
      } catch (e) {
        setError(e);
      } finally {
        setUseLoading(false);
      }
    }
    fetchRemoteData();
  }, []);

  return (
    <StyledContainer>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#b65be1", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {error && <p>{error.message}</p>}
      {userData.map((data) => {
        return (
          <StyledSection>
            <Header>
              <p>{data.topic}</p>
            </Header>
            <Main>
              <RowFlexDiv>
                <p>{`${data.title.substring(0, 20)}`}</p>
              </RowFlexDiv>
              <RowFlexDiv>
                {<p>{moment(data.publishedAt).format("MM-DD-YYYY")}</p>}
                <p>{data.state}</p>
              </RowFlexDiv>
              <RowFlexDiv>
                <Link to={data.url}>Source</Link>
              </RowFlexDiv>
              <RowFlexDivContent className={{ "text-align": "justify" }}>
                <p>{`${data.description.substring(0, 100)} ...`}</p>
              </RowFlexDivContent>
            </Main>
            <Footer>
              <Link to={`/details/${data._id}`}>More</Link>
            </Footer>
          </StyledSection>
        );
      })}
    </StyledContainer>
  );
}
