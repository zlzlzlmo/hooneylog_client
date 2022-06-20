import { keyframes } from 'styled-components';

export const moveName = keyframes`
     0% {
        transform: rotate(0);
    }

    35% {
        transform: rotate(0deg);
    }

    40% {
        transform: rotate(-5deg);
    }

    60% {
        transform: rotate(5deg);
    }

    65% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0);
    }

`;
