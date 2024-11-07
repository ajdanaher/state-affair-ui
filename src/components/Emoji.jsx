import styled from "styled-components";

const Span = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export default function Emoji({ symbol, label, setEmojiSelection }) {
  function handleOnclick() {
    if (symbol === "❌") {
      setEmojiSelection("");
    } else {
      setEmojiSelection(symbol);
    }
  }

  return (
    <Span
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
      onClick={handleOnclick}
    >
      {symbol}
    </Span>
  );
}
