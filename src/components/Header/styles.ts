import styled from 'styled-components';

export const HeaderTag = styled.header`
  background: #012552;
  height: 12vh;
  padding: 25px 20px;
  position: fixed;
  z-index: 1030;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  justify-content: space-between;
  display: flex;
  align-items: center;

  > h1 {
    font-size: 3.6rem;
    color: #FFF;
    margin: 0;
  }

  > a {
    text-decoration: none;
  }

  > a button {
    height: 3.2rem;
    font-size: 1.3rem;
    border-radius: 8px;
    background: #A8D3E8;
    font-weight: 600;
    padding: 0 28px;
    color: #312E38;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    > img {
      margin-right: 12px;
      width: 24px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ImgDiv = styled.div`
  margin-top: -80px;

  > img {
    display: block;
    margin: 0 auto;
    width: 200px;
  }
`;