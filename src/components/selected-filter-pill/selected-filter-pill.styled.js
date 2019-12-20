import styled from 'styled-components';

export const PillStyled = styled.div`
  .btn {
    background-color: dimgray;
    border-color: dimgray;
  }
  margin: 10px 5px;

  span:first-child {
    padding-right: 10px;
  }

  display: inline-block;
`;
PillStyled.displayName = 'PillStyled';

export const PillWrapperStyled = styled.section`
  margin: 10px 10px;
`;
PillWrapperStyled.displayName = 'PillWrapperStyled';
