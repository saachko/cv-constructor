import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 75px;
  background-color: transparent;
  width: 1024px;
  padding-bottom: 10px;

  @media (max-width: 1035px) {
    display: grid;
    width: 100%
  }

  @media (max-width: 968px) {
    background-color: rgba(255,255,255,0.8)
  }

  @media (max-width: 480px) {
    height: 120px;  
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;  
  }
`;

export {
  HeaderContainer,
  HeaderWrapper,
};
