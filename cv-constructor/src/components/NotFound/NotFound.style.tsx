import styled from 'styled-components';

import defaultTheme from 'styles/theme';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const iconStyle = {
  color: `${defaultTheme.colors.grey}`,
  transform: 'scale(2)'
}

export {
  NotFoundContainer,
  iconStyle,
}
