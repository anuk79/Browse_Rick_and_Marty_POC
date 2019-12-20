
import React, { Component } from 'react';

import FilterBox from '../../components/filter-box/filter-box';
import CharacterList from '../../components/character-list/character-list';
import SortDropdown from '../../components/sort-dropdown/sort-dropdown';
import FilterPills from '../../components/selected-filter-pill/selected-filter-pill';

import {
  SectionHeaderStyled,
  ColStyled,
  RowStyled,
} from './home-page.styled';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      filteredData: [],
      species: [],
      gender: [],
      origin: [],
      filterPills: [],
      isError: false,
      isDataLoading: true,
    };
    this.currentYear = (new Date()).getFullYear();
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => {
        response.json()
          .then(result => {
            const list = this.getCharacterList(result.results);
            this.setState({
              characterList: list,
              filteredData: list,
              isDataLoading: false,
            });
          })

      })
      .catch(() => {
        this.setState({
          isError: true,
          isDataLoading: false,
        })
      })
  }

  getFullYear = (date) => (new Date(String(date))).getFullYear();

  getCharacterList = list => list.map(character => ({
    imageSrc: character.image,
    id: character.id,
    created: this.currentYear - this.getFullYear(character.created),
    name: character.name,
    species: character.species,
    gender: character.gender,
    origin: character.origin.name,
    details:
      [
        { title: 'Status', value: character.status },
        { title: 'Species', value: character.species },
        { title: 'Gender', value: character.gender },
        { title: 'Origin', value: character.origin.name },
        { title: 'Last location', value: character.location.name },
      ]
  }));

  sortById = ({ target: { value } }) => {
    // sort data on basis of Id
    const compareFunction = value === 'Ascending' ?
      (val1, val2) => (val1.id - val2.id) : (val1, val2) => (val2.id - val1.id);
    this.setState({
      filteredData: this.state.filteredData.sort(compareFunction)
    });
  }

  filterData = (event, type, value) => {
    if (event.target.checked) {
      // add filter to state if it has been checked
      this.setState(prevState => {
        return ({
          [type]: [...prevState[type], value]
        })
      });
    } else {
      // remove filter from state if it has been unchecked
      this.setState(prevState => {
        return ({
          [type]: prevState[type].filter(val => val !== value)
        })
      });
    }
  }

  applyFilters = () => {
    const { species, origin, gender, characterList } = this.state;
    let pills = [].concat(species).concat(origin).concat(gender);

    // filter data which contains any of applied filters
    let filteredData = characterList
      .filter((val) =>
        species.includes(val.species) ||
        gender.includes(val.gender) ||
        origin.includes(val.origin)
      );

    this.setState({
      filterPills: pills,
      filteredData: pills.length ? filteredData : characterList,
    });
  }

  removeFilter = (filterName, index) => {
    this.setState(prevState => ({
      filterPills: prevState.filterPills.filter((val, i) => i !== index)
    }));
  }

  buildFilterSection = () => (
    <div className="col-xs-12 col-sm-3 col-md-2">
      <SectionHeaderStyled>
        {'Filters'}
        <span
          className="glyphicon glyphicon-plus add-filter-icon"
          onClick={this.applyFilters}
          tabIndex="0"></span>
      </SectionHeaderStyled>
      <FilterBox
        handleChange={this.filterData}
        filterName="species"
        filters={[
          { isChecked: false, checkboxName: 'Human' },
          { isChecked: false, checkboxName: 'Mythological' },
          { isChecked: false, checkboxName: 'Alien' },
        ]} />
      <FilterBox
        handleChange={this.filterData}
        filterName="gender"
        filters={[
          { isChecked: false, checkboxName: 'Male' },
          { isChecked: false, checkboxName: 'Female' },
        ]} />
      <FilterBox
        handleChange={this.filterData}
        filterName="origin"
        filters={[
          { isChecked: false, checkboxName: 'unknown' },
          { isChecked: false, checkboxName: 'Earth (C-137)' },
          { isChecked: false, checkboxName: 'Abadango' },
          { isChecked: false, checkboxName: 'Venzenulon 7' },
        ]} />
    </div>
  );

  noDataFoundMessage = () => (
    <div className="alert alert-info" role="alert">
      <strong>No data found!</strong> Please refine your search.
    </div>
  );

  buildErrorMessage = () => (
    <div className="alert alert-danger" role="alert">
      <strong>Some error occurred.</strong> Please try again after some time.
    </div>
  );

  buildLoadingSpinner = () => (
    <div className="spinner-border text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  render() {
    const { filterPills, characterList, filteredData, isError, isDataLoading } = this.state;
    let content;

    if (isDataLoading) {
      content = this.buildLoadingSpinner();
    } else {
      content = (
        <RowStyled className="row">
          {this.buildFilterSection()}
          <ColStyled className="col-xs-12 col-sm-9 col-md-10">
            <RowStyled className="row">
              <ColStyled className="col-xs-12 col-sm-9">
                <SectionHeaderStyled>Selected filters</SectionHeaderStyled>
                <FilterPills
                  pills={filterPills}
                  removeFilter={this.removeFilter}
                />
              </ColStyled>
              <div className="col-xs-12 col-sm-3">
                <SortDropdown
                  options={[
                    { value: 'Ascending', label: 'Ascending' },
                    { value: 'Descending', label: 'Descending' }
                  ]}
                  onSortOptionChange={this.sortById}
                />
              </div>
            </RowStyled>
            <RowStyled className="row">
              <div className="col-xs-12">
                {isError && this.buildErrorMessage()}
                {
                  !isError && (filterPills.length ? (
                    filteredData.length > 0 ? <CharacterList characterList={filteredData} />
                      : this.noDataFoundMessage()) : (
                      characterList.length > 0 ? <CharacterList characterList={characterList} />
                        : this.noDataFoundMessage())
                  )}
              </div>
            </RowStyled>
          </ColStyled>
        </RowStyled>
      );
    }
    return content;
  }
}

export default HomePage;