import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 7rem;

  > section {
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 0.2rem solid ${({ theme }) => theme.primary};

    @media (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 5rem;
      gap: 2rem;
      &:nth-child(even) > div {
        margin-top: 0;
      }
    }
    @media (max-width: 720px) {
      width: 100%;

      flex-direction: column;
      grid-template-columns: 1fr;
      margin-top: 5rem;
      /* gap: 2rem; */
      &:nth-child(even) > div {
        margin-top: 0;
      }
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    transition: 0.5s;

    h1 {
      width: 100%;
      color: ${({ theme }) => theme.primary};
      font-size: 1.7rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    span {
      color: ${({ theme }) => theme.secondary};
    }

    p {
      color: ${({ theme }) => theme.textHighlight};
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 1.1rem;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-1.5rem);
  }

  &:nth-child(even) {
    margin-top: 4rem;
  }

  @media (max-width: 1785px) {
    > div {
      height: 30rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 1280px) {
    > div {
      height: 35rem;
    }
  }
  @media (max-width: 1150px) {
    > div {
      height: 41rem;
    }
  }
  @media (max-width: 1000px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      width: 20rem;
      height: 30rem;
      padding: 1rem;
      justify-content: center;
    }
  }
  @media (max-width: 720px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }

    > div {
      width: 20rem;
      height: 30rem;
      padding: 1rem;
    }
  }
`;
