import * as React from 'react';
import styled from '@emotion/styled';
import {borderRadius, colors, spacing} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';

import {Swatch} from './Swatch';

export interface SwatchBookProps {
  colors: string[];
  value?: string;
  onSelect: (color: string) => void;
}

interface SwatchContainerProps {
  isSelected: boolean;
}

export const SwatchContainer = styled('div')<SwatchContainerProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 20,
    height: 20,

    cursor: 'pointer',
    borderRadius: borderRadius.s,
    transition: 'box-shadow 120ms ease',

    '&:hover': {
      boxShadow: `${colors.frenchVanilla100} 0px 0px 0px 2px, ${colors.licorice200} 0px 0px 0px 3px`,
    },

    '&:focus': {
      outline: 'none',
      ...focusRing(2, 2),
    },
  },
  ({isSelected}) =>
    isSelected
      ? {
          boxShadow: `${colors.frenchVanilla100} 0px 0px 0px 2px, ${colors.licorice200} 0px 0px 0px 3px`,
        }
      : {}
);

const Container = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, auto)',
  gridGap: spacing.xxs,
});

export const SwatchBook = ({colors, value, onSelect}: SwatchBookProps) => (
  <Container>
    {colors.map(color => {
      const isSelected = value ? color.toLowerCase() === value.toLowerCase() : false;

      const handleClick = () => onSelect(color);
      const handleKeyDown = (event: React.KeyboardEvent) =>
        (event.key === 'Enter' || event.key === ' ') && onSelect(color);

      const formatHex = (value: string) => {
        return value.replace(/#/g, '').substring(0, 6);
      };
      const formattedColor = formatHex(color);

      return (
        <SwatchContainer
          key={color}
          className={`wdc-color-picker--color-${formattedColor}`}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          isSelected={isSelected}
        >
          <Swatch color={color} isSelected={isSelected} />
        </SwatchContainer>
      );
    })}
  </Container>
);
