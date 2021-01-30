import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  Title,
  SubTitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer
      large={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
