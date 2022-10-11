import styled from 'styled-components';

import defaultTheme from 'styles/theme';

const Container = styled.div`
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  select {
    width: 30%;
  }
`;

const RemoveButton = styled.button.attrs({
  type: 'button',
})`
  height: 100%;
  margin-left: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const iconStyles = {
  transition: `${defaultTheme.effects.transition}`,
  color: `${defaultTheme.colors.primaryColor}`,

  '&:hover': {
    opacity: `${defaultTheme.effects.hoverOpacity}`,
  }
};

export {
  Container,
  Wrapper,
  RemoveButton,
  iconStyles
};
