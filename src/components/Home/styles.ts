import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 1450px) {
    margin-top: 0.5rem;
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 1000px) {
    margin-top: 0.25rem;
    margin-left: 1rem;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

export const InfoContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 25rem;
  align-self: flex-start;
  transform: 1s;
  font-size: 1.2rem;

  &:first-child {
    margin-left: 5rem;
  }

  &:last-child {
    align-self: flex-end;
  }

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 1rem;

    &:first-child {
      margin-left: 1rem;
    }
  }

  @media (max-width: 1000px) {
    width: 18rem;
    margin: 0;
  }
  &:last-child {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(1.2);
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
