import styled from 'styled-components';

export const CharacterBoxWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  background-color: rgb(55, 56, 56);
  color: white;

`;
CharacterBoxWrapper.displayName = 'CharacterBoxWrapper';

export const ImageColStyled = styled.div`
  padding: 0;
  img {
    width: 100%;
  }
`;
ImageColStyled.displayName = 'ImageColStyled';

export const ImageDetailsWrapperStyled = styled.div`
  padding: 10px;
  text-align: left;
  position: absolute;
  bottom: 0;
  min-height: 60px;
  background-color: rgba(51, 61, 55, 0.7);
  width: 100%;
  vertical-align: middle;
  > div:first-child {
    font-size: 20px;
  }

  @media only screen and (max-width: 420px) {
    min-height: 30px;
    > div:first-child {
      font-size: 12px;
    }
    > div:nth-child(2) {
      display: none;
    }
  }
`;
ImageDetailsWrapperStyled.displayName = 'ImageDetailsWrapperStyled';

export const DetailsTitleStyled = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  padding: 0;
`;
DetailsTitleStyled.displayName = 'DetailsTitleStyled';

export const DetailsValueStyled = styled.div`
  color: orange;
  text-align: right;
  padding: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 15px;
`;
DetailsValueStyled.displayName = 'DetailsValueStyled';

export const DetailsRowStyled = styled.div`
  border-bottom: 1px solid white;
  margin: 10px;
  padding: 10px 0;
`;

export const DetailsWrapper = styled.div`
  padding: 0;
`;
DetailsWrapper.displayName = 'DetailsWrapper';