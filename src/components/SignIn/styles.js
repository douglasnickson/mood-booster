import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

export const FormOrientation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  height: 350px;
  border: 1px solid var(--default);
  border-radius: 10px;

  h2 {
    font-size: 18px;
    text-align: center;
    color: var(--gray100);
    background-color: var(--default);
    border-bottom: 1px solid var(--gray300);
    border-radius: 10px 10px 0 0;
    padding: 15px;
    width: 100%;
    margin-bottom: 15px;
  }

  p {
    font-size: 12px;
    color: var(--gray700);
    margin: 10px 10px;
    font-weight: bold;

    span {
      cursor: pointer;
      color: var(--default);
    }

    span:hover {
      color: var(--gray300);
    }

    a {
      cursor: pointer;
      color: var(--default);
    }

    a:hover {
      color: var(--gray300);
    }
  }
`;

export const Form = styled(FormControl)`
  padding: 10px !important;
  width: 100%;
  b {
    color: var(--default);
    margin: 0 15px;
  }
`;

export const Field = styled(TextField)`
  width: 300px;
  padding: 5px;
  margin: 0 15px;
`;
