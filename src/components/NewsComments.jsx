import { useState, useEffect } from "react";
import { httpGetComments } from "../utils/http";
import { ColorRing } from "react-loader-spinner";
import Comment from "./Comment";
import styled from "styled-components";

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function NewsComments({ id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setUseLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRemoteData() {
      try {
        const data = await httpGetComments({ id });
        setComments(data);
      } catch (e) {
        setError(e);
      } finally {
        setUseLoading(false);
      }
    }
    fetchRemoteData();
  }, []);
  return (
    <>
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
      {comments.map((comment) => {
        return (
          <CommentDiv>
            <Comment
              comments={comment.comments}
              reaction={comment.reaction}
              publishedAt={comment.publishedAt}
            />
          </CommentDiv>
        );
      })}
    </>
  );
}
