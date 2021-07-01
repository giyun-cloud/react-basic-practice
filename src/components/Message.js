import React from "react";
import styled from "styled-components";
import PropTyeps from "prop-types";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Text = styled.span`
  color: ${(prop) => prop.color};
`;

function Message({ color, text }) {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
}

Message.propTypes = {
  text: PropTyeps.string.isRequired,
  color: PropTyeps.string.isRequired,
};

export default Message;
