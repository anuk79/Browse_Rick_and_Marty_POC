import React from 'react';

import CharacterBox from '../character-box/character-box';

import {
  CharacterListStyled,
  RowStyled,
} from './character-list.styled';

const CharacterList = (props) => {
  return (
    props.characterList.length > 0 && <RowStyled className="row">
      {props.characterList.map((character, index) =>
        <CharacterListStyled key={character.id} className="col-xs-6 col-sm-4 col-md-3">
          <CharacterBox {...character} />
        </CharacterListStyled>
      )}
    </RowStyled>
  )
};

export default CharacterList;