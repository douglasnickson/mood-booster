import styled from 'styled-components';

import Box from '@material-ui/core/Box';

export const Container = styled(Box)`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  max-width: 1120px;
  width: 80%;
  border: 1px solid var(--default);
  border-radius: 10px;
  margin: 0px 10px;

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
`;
