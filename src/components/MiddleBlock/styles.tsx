import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 5700px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
