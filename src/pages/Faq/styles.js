import styled from 'styled-components';
import Box from '@material-ui/core/Box';

export const Container = styled(Box)`
  height: 80% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  margin-top: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: var(--white);
  border: 1px solid var(--default);
  border-radius: 10px;
  max-width: 550px;

  h2 {
    font-size: 18px;
    text-align: center;
    color: var(--gray100);
    background-color: var(--default);
    border-bottom: 1px solid var(--gray300);
    border-radius: 10px 10px 0 0;
    padding: 15px;
    width: 100%;
  }

  P {
    text-align: left;
    padding: 10px;
  }

  h4 {
    text-align: center !important;
    padding: 5px;
    margin: 20px 0;
  }

  ul {
    li {
      padding: 5px;
      margin-left: 20px;
    }
  }
`;
