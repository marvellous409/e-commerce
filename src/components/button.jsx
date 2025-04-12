import React from 'react';
import styled from 'styled-components';

const Button = ({ bg_colour, value, text_size, text_colour, font_type, width, height }) => {
  return (
    <StyledButton
      bgColour={bg_colour}
      textSize={text_size}
      textColour={text_colour}
      fontType={font_type}
      width={width}
      height={height}
    >
      <span>{value}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ width }) => width || '6.5em'};
  height: ${({ height }) => height || '1.5em'};
  margin: 0.5em;
  background: ${({ bgColour }) => bgColour || 'black'};
  color: ${({ textColour }) => textColour || 'white'};
  border: none;
  border-radius: 0.40em;
  font-size: ${({ textSize }) => {
    switch (textSize) {
      case 'sm':
        return '0.875rem';
      case 'md':
        return '1rem';
      case 'lg':
        return '1.125rem';
      case 'xl':
        return '1.25rem';
      case '2xl':
        return '1.5rem';
      case '3xl':
        return '1.875rem';
      default:
        return '1.25rem';
    }
  }};
  font-weight: ${({ fontType }) => (fontType === 'bold' ? 'bold' : 'normal')};
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: "";
    background: white;
    position: absolute;
    z-index: 1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s ease;
  }

  &:hover {
    color: black;
  }

  &:hover::after {
    transform: skewX(-45deg) scale(1, 1);
  }
`;

export default Button;

