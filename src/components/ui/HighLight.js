import styled from 'styled-components';

export const EffectedCircle = styled.div`
  display: none;

  ${({ $isHovered }) =>
    $isHovered &&
    `
    display: block;
    position: absolute;
    bottom: calc(25% + 12px);
    left: calc(25% + 4px);
    width: 21.5rem;
    height: 12.75rem;
    background: linear-gradient(transparent, #ff0000);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    border-radius: 50%
  `}
`;
