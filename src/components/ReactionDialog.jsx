import { useState, forwardRef } from "react";
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

//export default function ReactionDialog({ ref }) {
const ReactionDialog = forwardRef(function ReactionDialog(props, ref) {
  const [emoji, setEmoji] = useState("");

  function setEmojiSelection(value) {
    setEmoji(value);
  }
  return (
    <dialog ref={ref}>
      <Title>
        <h4>Your Commentes. ..</h4>
        <p>{emoji}</p>
      </Title>
      <textarea rows="4" cols="50"></textarea>
      <FlexBox>
        <Emoji symbol="👍" label="Like" setEmojiSelection={setEmojiSelection} />
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
      <form method="dialog">
        <StyledSubmit>Close</StyledSubmit>
      </form>
    </dialog>
  );
});

export default ReactionDialog;
