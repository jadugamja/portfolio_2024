import { Container } from '../styles/StyledComponents';

const TranslucentTape = () => (
  <>
    <Container
      $position="absolute"
      $top="4px"
      $right="45%"
      $width="16px"
      $height="54px"
      $bg="linear-gradient(-137deg, #232323 6px, transparent 0) 0 5px, linear-gradient(320deg, #232323 5px, #fff 0) 0 5px"
      $bgPosition="left bottom"
      $bgRepeat="repeat-y"
      $bgSize="10px 10px"
      $transform="rotateZ(140deg)"
      $opacity="0.6"
      $zIndex="99"
    />
    <Container
      $position="absolute"
      $top="4px"
      $right="45%"
      $width="16px"
      $height="54px"
      $transform="rotateZ(140deg)"
      $opacity="0.6"
      $zIndex="99"
    />
    <Container
      $position="absolute"
      $top="4px"
      $right="45%"
      $width="16px"
      $height="54px"
      $bg="linear-gradient(-137deg, #232323 6px, transparent 0) 0 5px, linear-gradient(320deg, #232323 5px, #fff 0) 0 5px"
      $bgPosition="left bottom"
      $bgRepeat="repeat-y"
      $bgSize="10px 10px"
      $transform="rotateZ(140deg)"
      $opacity="0.6"
      $zIndex="99"
    />
  </>
);

export default TranslucentTape;
