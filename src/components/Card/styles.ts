import styled from 'styled-components';

export const GridDiv = styled.div`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
`;

export const CardContainer = styled.div`
  
  width: 300px;
  overflow: hidden;
  border-radius: 8px;
  color: #FFF;
  box-shadow: 0px 0px 15px -5px;
  transition: 1.3s;
  animation: ease-in;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }

  
`;

export const ImgDiv = styled.div`
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  > div {
    top: 10px;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    right: 15px;
  }
`;

export const CardContent = styled.div`
  margin-top: 0.5rem;
  margin: 1rem;

  > div h3, div p {
    padding: 0;
    margin: 0;
  }

  > div h3 {
    margin-bottom: 0.5rem;
    color: #FFF;
    font-size: 28px;
  }
`;