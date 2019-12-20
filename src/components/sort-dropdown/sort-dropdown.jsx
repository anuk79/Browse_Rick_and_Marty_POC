import React from 'react';

import {
  SelectStyled,
} from './sort-dropdown.styled';

const SortDropdown = (props) => {
  return (
    <SelectStyled onChange={props.onSortOptionChange} defaultValue="SortByID">
      <option disabled key="default-0" value="SortByID">Sort by ID</option>
      {
        props.options.map((item, index) =>
          <option value={item.value} key={item.value + index}>{item.label}</option>
        )
      }
    </SelectStyled>
  )
};

SortDropdown.defaultProps = {
  options: []
};

export default SortDropdown;