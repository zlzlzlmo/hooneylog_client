/* eslint-disable no-use-before-define */
import { css } from 'styled-components';
import { moveName } from './keyframes';

export const moveNameAnimation = css`
  animation: ${moveName} 2s linear infinite;
`;
