import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>sorry, the page you tried cannot be found</h3>
      <Link path="/" className="btn">
        back home
      </Link>
    </div>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
