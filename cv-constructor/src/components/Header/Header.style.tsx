import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 60px;
  background-color: transparent;
`;

const HeaderWrapper = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 20px;

  @media (max-width: 1030px) {
    width: 600px;
  }
`;

export {
  HeaderContainer,
  HeaderWrapper,
};
