import styled from "@emotion/styled";

export const GridListStyled = styled.ul`
  @media (min-width: 1280px) {
    display: grid;
    gap: 30px;

    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
  }
`;

export const GridItem = styled.li`
  padding-top: 26px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;

  border-radius: 8px;

  & h6 {
    margin-bottom: 16px;

    font-family: "Semi";
    font-size: 20px;
  }

  & h4 {
    margin-bottom: 4px;

    font-size: 13px;
  }

  & span {
    font-family: "Medium";
    font-size: 11px;
  }

  & p {
    font-family: "Medium";
    font-size: 13px;
    line-height: 1.4;
  }

  &:not(:last-of-type) {
    margin-bottom: 24px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }

  &:nth-of-type(1) {
    background-color: #733fc8;

    background-image: url("data:image/svg+xml;utf8,<svg width='104' height='102' xmlns='http://www.w3.org/2000/svg'><path d='M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z' fill='%23A775F1' fill-rule='nonzero'/></svg>");

    background-repeat: no-repeat;
    background-position: top right 24px;

    & h4 {
      color: #fff;
    }

    & h6 {
      color: #fff;
    }

    & span {
      color: #fff;
    }

    & p {
      color: #cfcfcf;
      opacity: 0.7;
    }

    @media (min-width: 1280px) {
      grid-column: span 2;
    }
  }

  &:nth-of-type(2) {
    background-color: #48556a;

    & h4 {
      color: #fff;
    }

    & h6 {
      color: #fff;
    }

    & span {
      color: #fff;
      opacity: 0.7;
    }

    & p {
      color: #fff;
      opacity: 0.7;
    }

    @media (min-width: 1280px) {
      grid-column: span 1;
    }
  }

  &:nth-of-type(3) {
    background-color: #fff;

    & h4 {
      color: #48556a;
    }

    & h6 {
      color: #48556a;
    }

    & span {
      color: #48556a;
      opacity: 0.7;
    }

    & p {
      color: #48556a;
      opacity: 0.7;
    }

    @media (min-width: 1280px) {
      grid-column: span 1;
    }
  }

  &:nth-of-type(4) {
    background-color: #19202d;

    & h4 {
      color: #fff;
    }

    & h6 {
      color: #ecf2f8;
    }

    & span {
      color: #ffffff;
      opacity: 0.7;
    }

    & p {
      color: #ffffff;
      opacity: 0.7;
    }

    @media (min-width: 1280px) {
      grid-column: span 2;
      grid-row: 2;
    }
  }

  &:nth-of-type(5) {
    background-color: #ffffff;

    & h4 {
      color: #48556a;
    }

    & h6 {
      color: #48556a;
    }

    & span {
      color: #48556a;
      opacity: 0.7;
    }

    & p {
      color: #48556a;
      opacity: 0.7;
    }

    @media (min-width: 1280px) {
      grid-column: span 2;
      grid-row: 1 / span 2;
    }
  }
`;

export const AvaCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 18px;
`;

export const AvaThumb = styled.div`
  margin-right: 16px;

  & > img {
    border-radius: 50%;
  }
`;

export const AvaContentCon = styled.div`
  & > p {
  }
`;
