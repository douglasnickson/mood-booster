import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

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

export const SelectItem = styled(Select)`
  width: 250px;
  padding: 5px;
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
