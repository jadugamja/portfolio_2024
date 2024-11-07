import { Link } from 'react-router-dom';
import {
  Section,
  Article,
  H3,
  H4,
  Img,
  Span,
  Container
} from '../styles/StyledComponents';
import play1 from '../assets/img/play-1.jpg';
import play2 from '../assets/img/play-2.jpg';
import TranslucentTape from '../TranslucentTape';

const Kkujjang = () => (
  <Section
    $width="100%"
    $height="100%"
    $maxHeight="100%"
    $padding="7rem 7.5rem"
    $paddingMobile="5rem 2.8rem"
    $display="flex"
  >
    <Article
      $width="100%"
      $position="relative"
      $top="0"
      $display="flex"
      $dirMobile="col"
      $row="between"
    >
      <Container>
        <Container>
          <H3>
            <Link to="https://kkujjang-dev.loasim.com/">
              <Span
                $fontFamily="Dela Gothic One"
                $fontSize="4rem"
                $fontSizeMobile="2.8rem"
                $fontWeight="400"
                $color="#C9BB3F"
                $textDecoration="underline 5px dotted"
              >
                KKUZZANG↗
              </Span>
            </Link>
          </H3>
          <Span $fontSize="21px" $fontSizeMobile="1rem">
            누구나 쉽게 즐기는 웹 끝말잇기 게임
          </Span>
        </Container>
        <Container>
          <Container $display="flex" $dir="col" $margin="2.5rem 0 0">
            <H4 $fontSize="1.6rem" $fontSizeMobile="1.3rem">
              ✨주요 기능
            </H4>
            <Span $fontSize="1.2rem" $fontSizeMobile="1rem">
              1. Web Socket을 활용한 채팅 및 실시간 온라인 게임 진행
            </Span>
            <Span $fontSize="1.2rem" $fontSizeMobile="1rem">
              2. React 기반 SPA를 활용한 매끄러운 사용자 경험 제공
            </Span>
            <Span $fontSize="1.2rem" $fontSizeMobile="1rem">
              3. Canvas API를 사용한 아바타 커스터마이징 및 동적 렌더링 구현
            </Span>
          </Container>
          <Container $display="flex" $dir="col" $margin="2.5rem 0 0">
            <H4 $fontSize="1.6rem" $fontSizeMobile="1.3rem">
              ✨테스트 계정
            </H4>
            <Span $fontSize="1.2rem" $fontSizeMobile="1rem">
              * 계정 1: 👤june123 / 🔒!@#123admin
            </Span>
            <Span $fontSize="1.2rem" $fontSizeMobile="1rem">
              * 계정 2: 👤gosari123 / 🔒!@#123admin
            </Span>
          </Container>
          <Container $display="flex" $dir="col" $margin="2.5rem 0 0">
            <H4 $fontSize="1.6rem" $fontSizeMobile="1.3rem">
              ✨기여도
            </H4>
            <Span $fontSize="1.2em" $fontSizeMobile="1rem">
              90%
            </Span>
          </Container>
        </Container>
      </Container>
      <Container
        $display="flex"
        $dir="col"
        $row="between"
        $margin="0 10rem 0 0"
      >
        <Img
          src={play1}
          $position="relative"
          $width="31rem"
          $widthMobile="23rem"
        />
        <Img
          src={play2}
          $position="relative"
          $width="31rem"
          $widthMobile="23rem"
          $margin="2rem 0 0 4rem"
          $marginMobile="0"
        />
      </Container>
    </Article>
  </Section>
);

export default Kkujjang;
