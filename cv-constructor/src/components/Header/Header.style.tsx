import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 60px;
  background-color: transparent;
  width: 1024px;

  @media (max-width: 1030px) {
    display: grid;
    width: 100%
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 20px;
`;

export {
  HeaderContainer,
  HeaderWrapper,
};
