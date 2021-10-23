import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray100);
  color: var(--white);
  background: var(--default);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  h1 {
    font-size: 18px;
    font-family: 'Helvetica Neue';
    letter-spacing: 1px;
    text-shadow: 1px 1px;
    text-transform: uppercase;
    border: 1px solid var(--gray100);
    -webkit-text-stroke: 0.015rem var(--primary);
    border-radius: 10px;
    padding: 5px;

    span {
      font-size: 24px;
      font-style: italic;
      -webkit-text-stroke: 0.015rem var(--gray100);
      color: var(--secondary);
    }
  }

  nav {
    margin-left: 2rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--white);
      transition: color 0.2s;

      & + a {
        margin-left: 1rem;
      }

      &:hover {
        color: var(--gray100);
      }

      &.active {
        color: var(--white);
        font-weight: bold;
      }
    }

    @media (max-width: 720px) {
      a {
        line-height: 2rem;
      }
    }

    button {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--white);
      transition: color 0.2s;
      background: none;
      border: none;
    }
  }
`;
