import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
const Li = styled.li`
  height: 50px;
  box-sizing: border-box;
  border-bottom: 4px solid
    ${(props) =>
      props.current === props.children.props.to ? "#868e96" : "transparent"};
  transition: border-bottom 0.4s ease-in;
`;
const SLink = styled(Link)`
  height: inherit;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #e9ecef;
  }
`;

const Header = ({ location: { pathname } }) => (
  <SHeader>
    <Ul>
      <Li current={pathname}>
        <SLink to="/">Home</SLink>
      </Li>
      <Li current={pathname}>
        <SLink to="/tv">TV</SLink>
      </Li>
      <Li current={pathname}>
        <SLink to="/search">Search</SLink>
      </Li>
    </Ul>
  </SHeader>
);
export default withRouter(Header);
