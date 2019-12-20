import React from 'react';

import {
  FilterWrapperStyled,
  CheckboxWrapperStyled,
} from './filter-box.styled';

const FilterBox = (props) => {
  return (
    <FilterWrapperStyled>
      <header><h4>{props.filterName}</h4></header>
      {props.filters.map((filter, index) =>
        <CheckboxWrapperStyled key={filter.checkboxName + index}>
          <input
            id={props.filterName + filter.checkboxName}
            type="checkbox"
            className=""
            onChange={(event) => props.handleChange(event, props.filterName, filter.checkboxName)}
            name={filter.checkboxName}
          />
          <label htmlFor={props.filterName + filter.checkboxName}>{filter.checkboxName}</label>
        </CheckboxWrapperStyled>
      )}
    </FilterWrapperStyled>
  )
};

FilterBox.defaultProps = {
  // filters: [{ isChecked: false, handleChange: () => { }, id: 1, checkboxName: 'filter' }]
  filters: []
};

export default FilterBox;