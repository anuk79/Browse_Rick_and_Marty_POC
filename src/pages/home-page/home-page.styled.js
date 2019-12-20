import styled from 'styled-components';

export const SectionHeaderStyled = styled.header`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 10px 0;
  color: black;

  .add-filter-icon {
    font-size: 16px;
    float: right;
    top: 5px;
    border: 1px solid black;
    border-radius: 50%;
    color: white;
    background-color: black;
    padding: 5px;
    padding-left: 6px;
  }
`;
SectionHeaderStyled.displayName = 'SectionHeaderStyled';

export const ColStyled = styled.div`
  padding: 0;
`;
ColStyled.displayName = 'ColStyled';

export const RowStyled = styled.div`
  margin: 0;
`;
RowStyled.displayName = 'RowStyled';
