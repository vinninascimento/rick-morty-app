import styled from 'styled-components';

export const FavoritesContainer = styled.main`
  margin: 0 auto;
  padding-top: 82px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 60px;
  max-width: 1120px;

  > h1 {
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 700;
    color: #A8D3E8;
    text-align: center;
  }
`;

export const LoadingDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  margin-top: 40px;

  > p {
    margin: 0;
    font-size: 2.4rem;
    color: #FFF;
  }
`;

export const NotFavoritesDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  > h3 {
    color: #FFF;
    margin-top: 45px;
    margin: 0;
    font-size: 2.2rem;
  }

  > img {
    margin-top: -45px;
    
  }
`;