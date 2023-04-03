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

  > div svg {
    cursor: pointer;
  }

  > div svg: hover {
    background-image: url('data:image/svg+xml;utf8,                <svg xmlns="http://www.w3.org/2000/svg"
    width="32" height="32" fill="red"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-heart"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>');
    cursor: pointer;
  }
`;