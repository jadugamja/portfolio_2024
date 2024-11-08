// import React, { useRef, useEffect } from 'react';
// import '../styles/typed.scss';
// import {
//   Container,
//   Section,
//   H1,
//   Span,
//   Hr,
//   P
// } from '../styles/StyledComponents';

// const Intro = () => {
//   const h1Ref = useRef(null);
//   const spanRef1 = useRef(null);
//   const spanRef2 = useRef(null);

//   useEffect(() => {
//     const observer = new ResizeObserver(() => {
//       const span1Width = spanRef1.current.offsetWidth;
//       const h1Height = h1Ref.current.offsetHeight;

//       if (span1Width >= h1Height) {
//         spanRef1.current.style.paddingLeft = '-100px';
//       } else {
//         spanRef1.current.style.paddingLeft = '0';
//       }

//       let newTop;
//       if (h1Height > 400) {
//         newTop = '12%';
//       } else {
//         newTop = '25%';
//       }
//       // h1Ref.current.style.fontSize =
//       //   h1Height > 684
//       //     ? 'clamp(1.5rem, 17vmin, 11.25rem)'
//       //     : 'clamp(1.5rem, 20vmin, 11.25rem)';

//       h1Ref.current.style.top = newTop;
//     });

//     observer.observe(spanRef1.current);
//     observer.observe(h1Ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <Section
//       $display="flex"
//       $dir="col"
//       $row="between"
//       $width="100%"
//       $height="100%"
//       $maxHeight="100%"
//       $padding="0 7.125rem"
//       $paddingTablet="0 4rem"
//       $paddingMobile="0 3rem"
//     >
//       <H1
//         ref={h1Ref}
//         $position="relative"
//         $top="clamp(12%, 25vmin, 25%)"
//         $display="flex"
//         $dir="col"
//         $color="#E7E7E7"
//         $lineHeight="0.95"
//         $fontSize="clamp(5.3rem, 16.8vw, 11.25rem)"
//         $fontWeight="400"
//       >
//         <Span
//           className="typed-text"
//           ref={spanRef1}
//           $fontFamily="Dela Gothic One"
//           $break="break-word"
//         />
//       </H1>
//       <Container
//         $position="relative"
//         $bottom="clamp(6%, 16vw, 22%)"
//         $display="flex"
//         $dir="col"
//         $col="end"
//       >
//         <Hr $width="43.75rem" $height="1px" $bgColor="#E7E7E7" />
//         <P
//           $fontSize="1.5rem"
//           $fontSizeMobile="1.1rem"
//           $color="#fff"
//           $margin="10px 0 0"
//         >
//           더 나은 사용자 경험을 향하여
//         </P>
//       </Container>
//     </Section>
//   );
// };

// export default Intro;
