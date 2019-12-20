import styled from 'styled-components';

export const FilterWrapperStyled = styled.section`
  border: 1px solid black;
  margin: 20px 5px;
  text-align: left;
  padding: 0 10px 5px;
  header {
    text-transform: capitalize;
  }
`;
FilterWrapperStyled.displayName = 'FilterWrapperStyled';

export const CheckboxWrapperStyled = styled.div`
  margin-bottom: 5px;

  input {
    margin-right: 5px;
  }

  label {
    font-weight: normal;
  }
`;
CheckboxWrapperStyled.displayName = 'CheckboxWrapperStyled';