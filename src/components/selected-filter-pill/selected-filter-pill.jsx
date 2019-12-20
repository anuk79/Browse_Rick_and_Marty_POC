import React from 'react';

import {
  PillWrapperStyled,
  PillStyled,
} from './selected-filter-pill.styled';

const FilterPills = (props) => {
  return (<PillWrapperStyled>
    {props.pills.map((pill, index) =>
      <PillStyled key={pill + index}>
        <div className="btn btn-info btn-sm">
          <span>{pill}</span>
          <span
            className="glyphicon glyphicon-remove"
            onClick={() => props.removeFilter(pill, index)}
            tabIndex="0"
          >
          </span>
        </div>
      </PillStyled>
    )}
  </PillWrapperStyled>
  )
}

export default FilterPills;