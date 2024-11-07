import styled from "styled-components";
import moment from "moment";

const CommentDiv = styled.div`
  margin: 0% 5%;
  width: 80%;
`;

const UserComments = styled.div`
  font-style: italic;
`;

const Reaction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  margin-bottom: 0%;
`;

const P = styled.p`
  margin-bottom: 0;
`;

export default function Comment({ comments, reaction, publishedAt }) {
  return (
    <CommentDiv>
      <UserComments>
        <P>"{comments}"</P>
      </UserComments>
      <Reaction>
        <span>{reaction}</span>
        <p>{moment(publishedAt).format("MM-DD-YYYY")}</p>
      </Reaction>
    </CommentDiv>
  );
}
