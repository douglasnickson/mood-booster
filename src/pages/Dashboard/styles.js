import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export const Content = styled(Box)`
  min-height: 100vh;
`;

export const GridContainer = styled(Grid)`
  background: #fff;
  border: 1px solid #006699;
  border-radius: 15px;
  box-shadow: 6px 8px rgba(0, 0, 0, 0.2);
  min-height: 20vh;
  text-align: center;
  color: #006699;
  padding: 30px 30px;

  h2 {
    padding: 5px;
  }
`;
