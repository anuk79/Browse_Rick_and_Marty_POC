import React from 'react';

import {
  CharacterBoxWrapper,
  ImageColStyled,
  ImageDetailsWrapperStyled,
  DetailsTitleStyled,
  DetailsValueStyled,
  DetailsRowStyled,
  DetailsWrapper,
} from './character-box.styled';

const CharacterBox = (props) => {
  const { imageSrc, id, created, details, name } = props;
  return (
    <CharacterBoxWrapper className="row">
      <ImageColStyled className="col-xs-12">
        <img src={imageSrc} alt="" />
        <ImageDetailsWrapperStyled>
          <div>{name}</div>
          <div>Id: {id} - Created {created} years ago</div>
        </ImageDetailsWrapperStyled>
      </ImageColStyled>
      <DetailsWrapper className="col-xs-12">
        {details.map((detail, index) =>
          <DetailsRowStyled key={detail.value + index} className="row">
            <DetailsTitleStyled className="col-xs-6 col-sm-3">
              {detail.title}
            </DetailsTitleStyled>
            <DetailsValueStyled className="col-xs-6 col-sm-9">
              {detail.value}
            </DetailsValueStyled>
          </DetailsRowStyled>
        )}
      </DetailsWrapper>
    </CharacterBoxWrapper>
  )
};

CharacterBox.defaultProps = {
};

export default CharacterBox;