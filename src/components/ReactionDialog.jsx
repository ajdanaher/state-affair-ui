import { useState, forwardRef, useRef } from "react";
import styled from "styled-components";
import Emoji from "./Emoji";

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
  margin-top: 0%.5rem;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 3rem;
`;

const ReactionDialog = forwardRef(function ReactionDialog(props, ref) {
  const [emoji, setEmoji] = useState("");
  const [comments, setUserComments] = useState("");

  function setEmojiSelection(value) {
    setEmoji(value);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const data = {};
    data.newsId = props.id;
    data.userComments = comments;
    if (emoji) data.userReaction = emoji;

    // console.log(data);

    setEmoji("");
    setUserComments("");
    ref.current.close();
  }

  function handleUserComments(event) {
    setUserComments(event.target.value);
  }

  return (
    <dialog ref={ref}>
      <form onSubmit={handleOnSubmit}>
        <Title>
          <h4>Your Commentes. ..</h4>
          <p>{emoji}</p>
        </Title>
        <textarea
          id="usercomments"
          name="usercoments"
          onChange={handleUserComments}
          value={comments}
          rows="4"
          cols="50"
        ></textarea>
        <FlexBox>
          <Emoji
            symbol="👍"
            label="Like"
            setEmojiSelection={setEmojiSelection}
          />
          <Emoji
            symbol="👎"
            label="Dont like"
            setEmojiSelection={setEmojiSelection}
          />
          <Emoji
            symbol="👏"
            label="Nice Done"
            setEmojiSelection={setEmojiSelection}
          />
          <Emoji
            symbol="❤️"
            label="Love it"
            setEmojiSelection={setEmojiSelection}
          />
          <Emoji
            symbol="❌"
            label="Remove Selection"
            setEmojiSelection={setEmojiSelection}
          />
        </FlexBox>
        <StyledSubmit>Close</StyledSubmit>
      </form>
    </dialog>
  );
});

export default ReactionDialog;
