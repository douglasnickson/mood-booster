import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Box)`
  min-height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  margin: 10px 10px;

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
