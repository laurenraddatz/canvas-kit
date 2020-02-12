import * as React from 'react';
import styled from '@emotion/styled';

import {borderRadius, colors, spacing, type, inputColors} from '@workday/canvas-kit-react-core';

import {Swatch} from './Swatch';

export const ResetButton: React.FunctionComponent<Props> = ({id, onClick, resetColor, label}) => {
  const handleResetColor = () => onClick(resetColor);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleResetColor();
    }
  };

  return (
    <Container id={id} onClick={handleResetColor} onKeyDown={handleKeyDown}>
      <Swatch color={resetColor} showCheck={false} />
      <Label id="canvas-color-picker--reset-label">{label || 'Reset'}</Label>
    </Container>
  );
};

export interface Props {
  id?: string;
  label?: string;
  resetColor: string;
  onClick: Function;
}

export const Label = styled('div')({
  marginLeft: spacing.xxs,
});

export const Container = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  borderRadius: borderRadius.m,

  width: `calc(100% + 8px)`,
  height: spacing.l,
  margin: '-8px 0px 8px 0px',
  padding: '0px 8px',

  ...type.body2,
  whiteSpace: 'nowrap',

  border: 'none',
  outline: 'none',
  background: 'none',

  cursor: 'pointer',
  transition: 'color 120ms ease, background-color 120ms ease',

  '&:hover': {
    backgroundColor: colors.soap300,
  },

  '&:active': {
    color: inputColors.focusBorder,

    path: {
      fill: inputColors.focusBorder,
    },
  },

  '&:focus': {
    boxShadow: `inset 0px 0px 0px 2px ${colors.blueberry400}`,
  },
});