import React from 'react';
import styled from 'styled-components';

const SliderBox = ({ src, image, className, title, desc }) => {
  const Box = styled.a`
    display: block;
    width: 272px;
    @media (min-width: 950px) {
      width: 30%;
    }
    margin: 8px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    img {
      display: block;
    }
    div {
      padding: 12px 16px 16px;
      p.title {
        font-size: 18px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
      }
    }
  `;
  return (
    <>
      <Box to={src}>
        <img src={image} alt="설명"></img>
        <div className={className}>
          <p className="title">{title}</p>
          <p>{desc}</p>
        </div>
      </Box>
    </>
  );
};

export default SliderBox;
