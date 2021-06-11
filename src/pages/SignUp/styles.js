import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

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

export const Logo = styled.img`
  height: 200px;
  width: 450px;
  padding: 20px;
`;

export const FormOrientation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  min-height: 50vh;
  border-radius: 10px;
  box-shadow: 3px 4px rgba(0, 0, 0, 0.2);
`;

export const Form = styled(FormControl)`
  margin: 10px 0 30px 0;
`;

export const Field = styled(TextField)`
  margin: 5px 0 10px 0;
`;

export const Divider = styled.div`
  width: 60%;
  border: 1px dashed #006699;
  margin: 20px 0;
`;
