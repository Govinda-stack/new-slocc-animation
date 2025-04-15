import "../App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "../assets/Imgs/Search.svg";
import { Card } from "react-bootstrap";
import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Round from "../assets/Imgs/rt.png";
import f1 from "../assets/Imgs/f1.png";
import f2 from "../assets/Imgs/f2.png";
import f3 from "../assets/Imgs/f3.png";
import Arrow from "../assets/Imgs/up-arrow.svg";
import Cta from "../assets/Imgs/Cta-scrol.png";
import sam from "../assets/Imgs/sam.png";
import grl from "../assets/Imgs/grl.png";
import testi from "../assets/Imgs/testimonal.svg";
import blog1 from "../assets/Imgs/blog-1.png";
import blog2 from "../assets/Imgs/blog-2.png";
import blog3 from "../assets/Imgs/blog-3.png";
import Counter from "../Animations/CountUp/CountUp";
import New from '../assets/Imgs/SLOC.png'
import back from '../assets/Imgs/back-cta.png'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollMagic from "scrollmagic";
import Logo from '../assets/Imgs/Round.svg'
import WelcomeLogo from '../assets/Imgs/back-scrol-BsNhHslO.png'
import revertLogo from '../assets/Imgs/Round.svg'
// import soback from '../assets/Imgs/back-scrol.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import NextArrow from '../assets/Imgs/right.svg';
import PrevArrow from '../assets/Imgs/left.svg';
import { Flip } from 'gsap/Flip';
// import Logo1 from '../assets/Imgs/back-scrol.png'
import Logo1 from '../assets/Imgs/blg.png'
import BottomImg1 from '../assets/Imgs/blg.png'
import BottomImg2 from '../assets/Imgs/blg.png'
import BottomImg3 from '../assets/Imgs/blg.png'
import BottomImg4 from '../assets/Imgs/blg.png'


const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",
    image: f1, // Replace with actual image URL
    bottomImage: BottomImg1,
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",

    image: f2,
    bottomImage: BottomImg2,
  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg3,
  },
  {
    id: 4,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg4,
  },
];

const testimonials = [
  {
    id: 1,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 2,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 3,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 4,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
];

const Blogs = [
  {
    id: 1,
    name: "Blog 1",
    image: blog1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
  {
    id: 2,
    name: "Blog 2",
    image: blog2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
  {
    id: 3,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
];

gsap.registerPlugin(ScrollTrigger);
function Home() {
  // 1. Welcome to SLOC section animation
  const containerRefs = useRef(null);
  const logoRefs = useRef(null); // Transparent SVG
  const scrollImageRef = useRef(null);
  const welcomeTextRef = useRef(null);

  // useEffect(() => {
  //   const paths = logoRefs.current?.querySelectorAll('path');
  //   if (!paths || paths.length === 0) {
  //     console.warn('No paths found in logoRefs'); // Debug if paths are missing
  //     return;
  //   }
  
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRefs.current,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: 0.2, // Smooth scrolling response
  //       markers: false, // Set to true if you need to debug trigger points
  //     },
  //   })
  //     .fromTo(
  //       logoRefs.current,
  //       {
  //         opacity: 0,
  //         y: -120,
  //         x: 160,
  //         scale: 1.4,
  //       },
  //       {
  //         opacity: 1,
  //         y: 50,
  //         x: 300,
  //         scale: 0.6,
  //         duration: 1.5,
  //         ease: 'power2.inOut',
  //       }
  //     )
  //     .to(
  //       scrollImageRef.current,
  //       {
  //         opacity: 0,
  //         duration: 0.2,
  //         ease: 'power2.inOut',
  //       },
  //       '-=1.5' // Start fading image at the same time as logo appears
  //     )
  //     .to(
  //       paths,
  //       {
  //         fill: '#064685',
  //         stroke: '#064685',
  //         duration: 1, // Gradual color change
  //         ease: 'none',
  //       },
  //       '-=1.5' // Start color change at the same time as logo movement
  //     )
  //     .to(
  //       logoRefs.current,
  //       {
  //         opacity: 0,
  //         y: 500,
  //         x: 500,
  //         scale: 0.2,
  //         duration: 1.5,
  //         ease: 'power2.inOut',
  //       },
  //       '-=0.5' // Overlap slightly to keep movement continuous
  //     )
  //     .to(
  //       paths,
  //       {
  //         fill: 'transparent',
  //         stroke: 'black',
  //         duration: 1,
  //         ease: 'none',
  //       },
  //       '-=1' // Revert color during logo fade-out
  //     );
  
  //   let timeout;
  //   window.addEventListener('resize', () => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => ScrollTrigger.refresh(), 100);
  //   });
  
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     window.removeEventListener('resize', ScrollTrigger.refresh);
  //   };
  // }, []);
  //2.) FEATURED PROJECTS section

  // useEffect(() => {
  //   const paths = logoRefs.current?.querySelectorAll('path');
  //   if (!paths || paths.length === 0) {
  //     console.warn('No paths found in logoRefs');
  //     return;
  //   }
  
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRefs.current,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: 0.2,
  //       markers: false,
  //     },
  //   })
  //     .fromTo(
  //       logoRefs.current,
  //       {
  //         opacity: 0,
  //         y: -120,
  //         x: 160,
  //         scale: 1.4,
  //       },
  //       {
  //         opacity: 1,
  //         y: 50,
  //         x: 300,
  //         scale: 0.6,
  //         duration: 1.5,
  //         ease: 'power2.inOut',
  //       }
  //     )
  //     .to(
  //       scrollImageRef.current,
  //       {
  //         opacity: 0,
  //         duration: 0.2,
  //         ease: 'power2.inOut',
  //       },
  //       '-=1.5'
  //     )
  //     .to(
  //       paths,
  //       {
  //         fill: '#064685',
  //         stroke: '#064685',
  //         duration: 1,
  //         ease: 'none',
  //       },
  //       '-=1.5'
  //     )
  //     .to(
  //       logoRefs.current,
  //       {
  //         y: 570, // Increased from 500 to go lower
  //         x: 630,
  //         scale: 0.2,
  //         duration: 1.5,
  //         ease: 'power2.inOut',
  //       },
  //       '-=0.5'
  //     )
  //     .set(
  //       logoRefs.current,
  //       {
  //         display: 'none', // Disappear after going lower
  //       },
  //       '>' // After the previous animation
  //     );
  
  //   let timeout;
  //   window.addEventListener('resize', () => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => ScrollTrigger.refresh(), 100);
  //   });
  
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     window.removeEventListener('resize', () => {});
  //   };
  // }, []);

  useEffect(() => {
    // Ensure logoRefs exists
    const paths = logoRefs.current?.querySelectorAll('path');
    if (!paths || paths.length === 0) {
      console.warn('No paths found in logoRefs');
      return;
    }
  
    // Set initial faded color using GSAP to avoid FOUC (Flash of Unstyled Content)
    gsap.set(paths, {
      fill: '#b3b3b3', // Light gray, faded look
      stroke: '#b3b3b3',
    });
  
    // Variable to track if logo is hidden
    let isHidden = false;
  
    // GSAP Timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRefs.current,
        start: 'top center',
        end: 'bottom center-=-1vh',
        scrub: 0.1, // Reduced for smoother response
        markers: false,
        onUpdate: (self) => {
          // Simplified scroll direction logic
          if (self.progress <= 0.05 && !isHidden) {
            // Fade out near top
            gsap.to(logoRefs.current, {
              opacity: 0,
              duration: 0.1,
              scrub: 1,
              ease: 'power2.inOut',
              onComplete: () => {
                isHidden = true;
              },
            });
          } else if (self.progress > 0.05 && isHidden && self.direction === -1) {
            // Fade in when scrolling up
            gsap.to(logoRefs.current, {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.inOut',
            });
            isHidden = false;
          }
        },
      },
    })
      .fromTo(
        logoRefs.current,
        {
          opacity: 0,
          y: -120,
          x: 160,
          scale: 1.4,
          willChange: 'transform, opacity', // Optimize rendering
        },
        {
          opacity: 1,
          y: 50,
          x: 300,
          scale: 0.6,
          duration: 1.2, // Slightly faster for smoother feel
          ease: 'power2.inOut',
        }
      )
      .to(
        scrollImageRef.current,
        {
          opacity: 0,
          duration: 0.15,
          ease: 'power2.inOut',
        },
        '-=1.2'
      )
      .to(
        paths,
        {
          fill: '#012fcb', // Transition to final color
          stroke: '#012fcb',
          duration: 1.8, // Faster color transition
          ease: 'none',
        },
        '-=1.2'
      )
      .to(
        logoRefs.current,
        {
          y: 601,
          x: 609,
          scale: 0.1,
          duration: 9.2,
          ease: 'power2.inOut',
        },
        '-=0.2'
      )
      .to(
        logoRefs.current,
        {
          opacity: 0,
          duration: 2.3,
          ease: 'power2.inOut',
          onComplete: () => {
            isHidden = true;
          },
        },
        '>'
      );
  
    // Debounced resize handler
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => ScrollTrigger.refresh(), 150); // Increased debounce time
    };
    window.addEventListener('resize', handleResize);
  
    // Cleanup
    return () => {
      tl.kill(); // Kill the timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const imageRefs = useRef([]);
  const boxRefs = useRef([]);
  const bottomImageRefs = useRef([]);
  const section2ImageRef = useRef(null);

//   useEffect(() => {
//     const boxes = boxRefs.current;
//     const images = imageRefs.current;
//     const bottomImages = bottomImageRefs.current;
//     const section2Image = section2ImageRef.current;
//     // Top Images Animation
//     // images.forEach((img, index) => {
//     //   const box = boxes[index];

//     //   const xOffset = () => {
//     //     const boxRect = box.getBoundingClientRect();
//     //     const imgRect = img.getBoundingClientRect();
//     //     return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
//     //   };

//     //   gsap.fromTo(
//     //     img,
//     //     {
//     //       x: 0,
//     //       // y: -170,
//     //       y: -170,
//     //       scale: 1,
//     //       opacity: 1,
//     //       visibility: "hidden",
//     //     },
//     //     {
//     //       x: xOffset,
//     //       y: 300,
//     //       scale: 1,
//     //       opacity: 1,
//     //       visibility: "visible",
//     //       ease: "power2.out",
//     //       scrollTrigger: {
//     //         trigger: section1Ref.current,
//     //         // start: "top center",
//     //         start: "top center+=95",
//     //         end: "bottom center",
//     //         scrub: true,
//     //         onUpdate: (self) => {
//     //           const imgRect = img.getBoundingClientRect();
//     //           const boxRect = box.getBoundingClientRect();
//     //           const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
//     //           if (isInside) {
//     //             box.style.backgroundColor = "#EFF7FE";
//     //           } else {
//     //             box.style.backgroundColor = "";
//     //           }
//     //         },
//     //       },
//     //     }
//     //   );
//     // });

//     images.forEach((img, index) => {
//       const box = boxes[index];
  
//       const getOffsets = () => {
//         const boxRect = box.getBoundingClientRect();
//         const imgRect = img.getBoundingClientRect();
//         // Adjust to match the ::before position (top: 7px, left: -5px relative to card)
//         return {
//           x: boxRect.left - 5 - (imgRect.left + imgRect.width / 2) + boxRect.width / 2,
//           y: boxRect.top + 7 - (imgRect.top + imgRect.height / 2) + boxRect.height / 2,
//         };
//       };
  
//       gsap.fromTo(
//         img,
//         {
//           x: 0,
//           y: -170,
//           scale: 1,
//           opacity: 1,
//           visibility: "hidden",
//         },
//         {
//           x: () => getOffsets().x,
//           y: () => getOffsets().y,
//           scale: 1,
//           opacity: 1, // Fade out as it reaches the ::before position
//           visibility: "visible",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section1Ref.current,
//             start: "top center+=95",
//             end: "bottom center",
//             scrub: true,
//             onUpdate: (self) => {
//               const imgRect = img.getBoundingClientRect();
//               const boxRect = box.getBoundingClientRect();
//               const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
//               if (isInside) {
//                 box.style.backgroundColor = "#EFF7FE";
//               } else {
//                 box.style.backgroundColor = "";
//               }
//             },
//             onComplete: () => {
//               // Optionally hide the initial image and let ::before take over
//               gsap.set(img, { visibility: "hidden" });
//             },
//           },
//         }
//       );
//     });

// bottomImages.forEach((img, index) => {
//   const target = section2ImageRef.current[index];

//   const getOffsets = () => {
//     const imgRect = img.getBoundingClientRect();
//     const targetRect = target.getBoundingClientRect();

//     const offsetX = targetRect.left + targetRect.width / 2 - (imgRect.left + imgRect.width / 2);
//     const offsetY = targetRect.top + targetRect.height / 2 - (imgRect.top + imgRect.height / 2);

//     return { x: offsetX, y: offsetY };
//   };

//   // Wait for layout to settle
//   requestAnimationFrame(() => {
//     const { x, y } = getOffsets();

// gsap.fromTo(
//       img,
//       { x: 0, y: 0, opacity: 1, visibility: 'hidden', zIndex: -1 }, // Start behind
//       {
//         x: () => getOffsets().x,
//         y: () => getOffsets().y,
//         scale: 0.5,
//         opacity: 0,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section2Ref.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: 2,
//           onEnter: () => gsap.set(img, { visibility: "visible" }),
//           onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
//         },
//       }
//     );
//   });
// });

// // Section 2: Bottom images move into right-side image
// bottomImages.forEach((img, index) => {
//   const xOffset = () => {
//     const imgRect = img.getBoundingClientRect();
//     const section2ImgRect = section2Image.getBoundingClientRect();
//     return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2) + 50;
//   };

//   // Movement animation
//   gsap.to(img, {
//     x: xOffset,
//     y: 500,
//     scale: 0.5,
//     opacity: 0,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: section2Ref.current,
//       start: "top center", // Start movement early
//       end: "bottom center", // End movement when bottom of section is at center
//       scrub: 2,
//       onEnter: () => gsap.set(img, { visibility: "visible" }),
//       onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
//     },
//   });


// });

// // Section 2: Make section2ImageRef vanish (already working perfectly)
// gsap.to(section2Image, {
//   opacity: 0, // Fully vanish
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: section2Ref.current,
//     start: "bottom center-=10", // Match bottom images' fade start
//     end: "bottom center", // Match collision point
//     scrub: 1, // Match scrub for consistency
//   },
// });

// // // Section 2: Make section2ImageRef vanish at collision
// // gsap.to(section2Image, {
// //   opacity: 0, // Fully vanish
// //   ease: "power2.out",
// //   scrollTrigger: {
// //     trigger: section2Ref.current,
// //     start: "bottom center-=50", // Start fade just before collision
// //     end: "bottom center", // Complete fade at collision
// //     scrub: 1, // Faster scrub for precise timing
// //   },
// // });

//     // Section 2: Move top images only
//     // gsap.to(images, {
//     //   y: 750,
//     //   ease: "power2.out",
//     //   scrollTrigger: {
//     //     trigger: section2Ref.current,
//     //     start: "top center",
//     //     end: "bottom center",
//     //     scrub: true,
//     //   },
//     // });

//     // Reset background color of boxes when section2Ref is reached
//     gsap.to(boxes, {
//       scrollTrigger: {
//         trigger: section2Ref.current,
//         start: "top center", // When top of section2Ref hits center of viewport
//         onEnter: () => {
//           boxes.forEach((box) => {
//             box.style.backgroundColor = ""; // Reset to default
//           });
//         },
//       },
//     });
//   }, []);

    //3.) Testimonials section
    
    useEffect(() => {
      const boxes = boxRefs.current;
      const images = imageRefs.current;
      const bottomImages = bottomImageRefs.current;
      const section2Image = section2ImageRef.current;
    
      // Top Images Animation (Move into ::before)
      // images.forEach((img, index) => {
      //   const box = boxes[index];
    
      //   const getOffsets = () => {
      //     const boxRect = box.getBoundingClientRect();
      //     const imgRect = img.getBoundingClientRect();
      //     // Adjust to match the ::before position (top: 7px, left: -5px relative to card)
      //     return {
      //       x: boxRect.left - 5 - (imgRect.left + imgRect.width / 2) + boxRect.width / 2,
      //       y: boxRect.top + 7 - (imgRect.top + imgRect.height / 2) + boxRect.height / 2,
      //     };
      //   };
    
      //   gsap.fromTo(
      //     img,
      //     {
      //       x: 0,
      //       y: -170,
      //       scale: 1,
      //       opacity: 1,
      //       visibility: "hidden",
      //     },
      //     {
      //       x: () => getOffsets().x,
      //       y: () => getOffsets().y,
      //       scale: 1,
      //       opacity: 1, // Fade out as it reaches the ::before position
      //       visibility: "visible",
      //       ease: "power2.out",
      //       scrollTrigger: {
      //         trigger: section1Ref.current,
      //         start: "top center+=95",
      //         end: "bottom center",
      //         scrub: true,
      //         onUpdate: (self) => {
      //           const imgRect = img.getBoundingClientRect();
      //           const boxRect = box.getBoundingClientRect();
      //           const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
      //           if (isInside) {
      //             box.style.backgroundColor = "#EFF7FE"; // Optional: Keep if you want the background change
      //           } else {
      //             box.style.backgroundColor = "";
      //           }
      //         },
      //         onComplete: () => {
      //           // Hide the initial image and let ::before take over
      //           gsap.set(img, { visibility: "hidden" });
      //         },
      //       },
      //     }
      //   );
      // });
      images.forEach((img, index) => {
        const box = boxes[index];
        const cardImg = box.querySelector('img.card-img-top'); // Get the <Card.Img>
      
        const getOffsets = () => {
          const cardImgRect = cardImg.getBoundingClientRect();
          const imgRect = img.getBoundingClientRect();
          // Target 220px above the top-right corner of the card's top image
          return {
            x: cardImgRect.right - imgRect.width / 2 - imgRect.left, // Center at right edge
            y: cardImgRect.top - 215 + imgRect.height / 2 - imgRect.top, // Center 220px above top
          };
        };
      
        gsap.fromTo(
          img,
          {
            x: 0,
            y: -170,
            scale: 1,
            opacity: 1,
            visibility: "hidden",
          },
          {
            x: () => getOffsets().x,
            y: () => getOffsets().y,
            scale: 1,
            opacity: 1,
            visibility: "visible",
            ease: "power2.out",
            scrollTrigger: {
              trigger: section1Ref.current,
              start: "top center+=135",
              end: "bottom center",
              scrub: true,
              onUpdate: (self) => {
                const imgRect = img.getBoundingClientRect();
                const boxRect = box.getBoundingClientRect();
                const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
                if (isInside) {
                  // box.style.backgroundColor = "#EFF7FE";
                  box.style.backgroundColor = "";
                } else {
                  box.style.backgroundColor = "";
                }
              },
              onComplete: () => {
                gsap.set(img, { visibility: "hidden" }); // Hide to "stick" at position
              },
            },
          }
        );
      });
    
// Bottom Images Animation: Move into center of section2Image
// Bottom Images: Animate to center of section2Image
bottomImages.forEach((img) => {
  const getOffsets = () => {
    const imgRect = img.getBoundingClientRect();
    const targetRect = section2Image.getBoundingClientRect();
    return {
      x: targetRect.left + targetRect.width / 2 - (imgRect.left + imgRect.width / 2),
      y: targetRect.top + targetRect.height / 2 - (imgRect.top + imgRect.height / 2),
    };
  };

  gsap.fromTo(
    img,
    {
      x: 0,
      y: 0,
      scale: 0.7,
      opacity: 1,
      visibility: "hidden",
    },
    {
      x: () => getOffsets().x,
      y: () => getOffsets().y,
      scale: 0.4  ,
      opacity: 0,
  duration: 3.5,
      visibility: "visible",
      ease: "power2.out",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top center+=70",
        end: "bottom center-=20",
        scrub: 2,
        // onEnter: () => {
        //   if (!img.dataset.hidden) {
        //     gsap.set(img, { visibility: "visible" });
        //   }
        // },
        // onLeaveBack: () => {
        //   if (!img.dataset.hidden) {
        //     gsap.set(img, { visibility: "hidden" });
        //   }
        // },
      },
    }
  );
});

// Synchronized Fade-Out: section2Image and bottomImages
gsap.to([section2Image, ...bottomImages], {
  opacity: 0,
  scale: 0.4,
  duration: 3.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: section2Ref.current,
    start: "bottom center-=20",
    end: "bottom center-=20",
    scrub: 5,
    onComplete: () => {
      // Lock hidden state
      gsap.set([section2Image, ...bottomImages], {
        opacity: 0,
        visibility: "hidden",
        overwrite: true, // Prevent other animations from overriding
      });
      // Mark as hidden to block onEnter
      bottomImages.forEach((img) => {
        img.dataset.hidden = "true";
      });
      section2Image.dataset.hidden = "true";
    },
  },
});

// Reset background color of boxes when section2Ref is reached
// gsap.to(boxes, {
//   scrollTrigger: {
//     trigger: section2Ref.current,
//     start: "top center",
//     onEnter: () => {
//       boxes.forEach((box) => {
//         box.style.backgroundColor = "";
//       });
//     },
//   },
// });
    }, []);
    const logoRefs1 = useRef(null);
    const containerRefs1 = useRef(null);
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRefs1.current,
          start: "top center+=30px", // -30px offset for scrolling up (delays start)
          end: "bottom center-=-30px", // -30px offset for scrolling down
          scrub: 1.2, // Smooth scrubbing for both directions
          markers: false, // Set to true for debugging
        },
      })
        .fromTo(
          logoRefs1.current,
          {
            opacity: 0,
            y: -490,
            x: 1150,
          },
          {
            opacity: 1,
            y: 50,
            x: 550,
            ease: "power3.out",
            duration: 5.5,
          }
        )
        .to(logoRefs1.current, {
          opacity: 0,
          y: 550,
          x: 550,
          scale: 0.2,
          ease: "power3.inOut",
          duration: 7.5,
        });
    
      // Handle resize to refresh ScrollTrigger
      let timeout;
      window.addEventListener("resize", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => ScrollTrigger.refresh(), 100);
      });
    
      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        window.removeEventListener("resize", () => {});
      };
    }, []);

  const blogsectionRef = useRef(null);
  const BlogimageRefs = useRef([]);
  const BlogsboxRefs = useRef([]);
  const BlogBottomImageRefs = useRef([]);
  const BlogsBottomsectionRef = useRef(null);

  useEffect(() => {
    const boxes = BlogsboxRefs.current;
    const images = BlogimageRefs.current;
    // Bottom Images: Emerge from inside boxes downward
    images.forEach((img, index) => {
      const box = boxes[index];
      const cardImg = box.querySelector('img.card-img-top'); // Get the <Card.Img>
    
      const getOffsets = () => {
        const cardImgRect = cardImg.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        // Target 220px above the top-right corner of the card's top image
        return {
          x: cardImgRect.right - imgRect.width / 2 - imgRect.left, // Center at right edge
          y: cardImgRect.top - 200 + imgRect.height / 2 - imgRect.top, // Center 220px above top
        };
      };
    
      gsap.fromTo(
        img,
        {
          x: 0,
          y: -170,
          scale: 1,
          opacity: 1,
          visibility: "hidden",
        },
        {
          x: () => getOffsets().x,
          y: () => getOffsets().y,
          scale: 1,
          opacity: 1,
          visibility: "visible",
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogsectionRef.current,
            start: "top center+=175",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              const imgRect = img.getBoundingClientRect();
              const boxRect = box.getBoundingClientRect();
              const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
              if (isInside) {
                // box.style.backgroundColor = "#EFF7FE";
                box.style.backgroundColor = "";
              } else {
                box.style.backgroundColor = "";
              }
            },
            onComplete: () => {
              gsap.set(img, { visibility: "hidden" }); // Hide to "stick" at position
            },
          },
        }
      );
    });
// Collapse and vanish images into one at the bottom

  }, []);

  return (
    <>
      <main id="All" >

        <section className="Main-banner" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} >
                <h1>Search Land Of Choice</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
              </Col>
              <Col>
                {/* Dont Edit this this for animation  */}
                <div className="animated-logo">
                  <div className="image-wrapper">
                    <img
                      src={Logo}
                      alt="Logo"
                      id="rocket-image"
                      className="rocket-image main-image"
                    />
                    <div className="split-images" >
                      <img src={Logo} alt="Split 1" className="split-image" />
                      <img src={Logo} alt="Split 2" className="split-image" />
                      <img src={Logo} alt="Split 3" className="split-image" />
                    </div>
                  </div>
                </div>
                {/* Dont Edit this this for animation End */}

              </Col>
            </Row>
          </Container>
          <div className="d-flex align-items-center searc-bar  justify-content-between">
            <DropdownButton
              id="dropdown-city"
              title="City"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">New York</Dropdown.Item>
              <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
              <Dropdown.Item href="#">Chicago</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              id="dropdown-property"
              title="Property Type"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">Apartment</Dropdown.Item>
              <Dropdown.Item href="#">House</Dropdown.Item>
              <Dropdown.Item href="#">Condo</Dropdown.Item>
            </DropdownButton>

            <InputGroup className="me-2 ">
              <InputGroup.Text>
                <img src={Search} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search by location or property ID....."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Button variant="primary">Search</Button>
          </div>
        </section>

<section ref={containerRefs} className="welcome">
  {/* Transparent SVG */}


  {/* Blue SVG */}
<svg
  className="Move move_logo"
  width="384"
  height="383"
  viewBox="0 0 384 383"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  ref={logoRefs}
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0, // Start hidden
  }}
>
  <path
    d="M70.7116 334.744C0.580713 282.717 -19.6915 184.139 20.305 106.373C60.8494 26.9634 151.8 -15.7535 231.245 6.70026C334.25 35.7258 368.22 159.495 294.254 235.071C289.871 239.452 284.939 242.19 280.008 246.024C283.296 224.666 290.418 204.403 289.323 184.139C284.939 121.159 223.575 80.6332 160.567 96.5151C64.6847 121.159 15.9218 230.69 61.9452 318.314C64.6847 323.791 67.9721 329.267 70.7116 334.744Z"
    fill="transparent"
    stroke="black"
  />
  <path
    d="M101.16 147.639C98.4175 160.785 95.6751 169.548 95.1267 178.311C87.4483 244.037 141.746 297.713 208.109 289.497C312.864 276.352 373.195 176.121 335.351 77.5319C333.706 73.6979 332.609 69.3162 329.866 62.7437C379.228 103.275 397.327 185.979 373.743 254.444C338.642 356.319 222.369 411.09 134.067 367.821C55.0893 329.481 32.6025 229.249 86.3514 161.332C89.6421 156.951 94.0298 154.212 101.16 147.639Z"
    fill="transparent"
    stroke="black"
  />
</svg>
  <Container className="py-5">
    <Row className="mb-4 d-flex">
      <Col md={6} className="align-content-end head">
        <img src={Round} alt="scroling" className="scrol-top" ref={scrollImageRef} />

        <h2 className="same-head" >
          WELCOME TO SLOC
        </h2>
        <p className="same-head-p">
          SLOC – "Search Land of Choice" is a leading real estate company in India dedicated to
          providing exceptional property solutions. With a focus on customer satisfaction and market
          expertise, SLOC has built a reputation as a trusted name in the industry. Collaborating with
          top-tier real estate brands like Godrej, DLF, and many more, SLOC offers a diverse range of
          properties, including luxurious apartments, plots, villas, and commercial space.
        </p>
      </Col>
      <Col md={6} className="d-flex flex-wrap four-col-st" >
        <Col md={6} lg={6} className="right">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={1} from={0} />
              M+
            </h3>
            <p>Sed ut Perspiciatis</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-bottom">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={500} from={0} />
              K
            </h3>
            <p>Lorem Ipsum</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-right" ref={welcomeTextRef}>
          <Card>
            <h3 className="text-primary">
              <Counter className="Counter-no" to={24} from={0} />
              /7
            </h3>
            <p>Consectetur Adipiscing Elit, Sed Do</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="left-brdr">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={1} from={0} />
              M+
            </h3>
            <p>Sed ut Perspiciatis</p>
          </Card>
        </Col>
      </Col>
    </Row>
  </Container>
</section>

<section ref={section1Ref} className="featured">
  <div className="featured-floating-imgs">
    <div className="image-stack">
      <img
        ref={(el) => (imageRefs.current[0] = el)}
        className="initial-image"
        src={Logo1}
        alt="img1"
      />
      <img
        ref={(el) => (imageRefs.current[1] = el)}
        className="initial-image"
        src={Logo1}
        alt="img2"
      />
      <img
        ref={(el) => (imageRefs.current[2] = el)}
        className="initial-image"
        src={Logo1}
        alt="img3"
      />
    </div>
  </div>
  <Container className="full">
           <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">FEATURED PROJECTS</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col md={4} className="align-items-end text-end align-content-center">
                <div className="custom-swiper-nav d-flex gap-4 justify-content-end mb-3">
                  <img src={PrevArrow} alt="Previous" className="swiper-button-prev-custom" />
                  <img src={NextArrow} alt="Next" className="swiper-button-next-custom" />
                </div>
              </Col>
            </Row>
    <Row className="features-row">
              <Swiper
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Navigation]}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
              >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <Col className="features-list p-0 dip-column">
                              {index < 3 && (
                    <img
                      ref={(el) => (bottomImageRefs.current[index] = el)}
                      className="bottom-image"
                      src={project.bottomImage}
                      alt={`bottom-img-${project.id}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1, // Below the card
                        pointerEvents: 'none', // Prevent interaction
                        width: '60%',
                        height: 'auto',
                      }}
                    />
                  )}
                <Card
                  ref={(el) => (boxRefs.current[index] = el)}
                  className={`custom-card card-${index} box-${index}`}
    style={{ position: 'relative', zIndex: 2 }}
                >
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body className="uper-space">
                    <Card.Text className="mb-4 btn-loc">
                      <span>{project.size}</span> <span>{project.feet}</span>
                      <span>{project.location}</span>
                    </Card.Text>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-primary font-weight-bold">
                      {project.price}
                    </Card.Text>
                    <Button className="Up-arrow-btn">
                      <img src={Arrow} />
                    </Button>
                  </Card.Body>

                </Card>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  </Container>
</section>

        <section ref={section2Ref} className="Cta position-relative">
          <Container>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col md={8}>
                <h2 className="same-head">FIND YOUR DREAM HOME TODAY!</h2>
                <p className="same-head-p">
                  Explore the best properties in your preferred location. Start
                  your journey to a perfect home with us.
                </p>
                <img src={back} alt="" className="back-roll" ref={section2ImageRef}
                />

              </Col>

              <Col md={4} className="text-end">
                {/* <img src={Cta} alt="" className="scroll-img" /> */}
                <Button variant="dark" className="banner-button">
                  Contact us for More info
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section ref={containerRefs1} className="social-proof position-relative">
          <img className="Move" src={WelcomeLogo} ref={logoRefs1} />
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4">
                  <h2 className="same-head">Testimonials </h2>
                  <p className="same-head-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="Up-arrow-btn">
                    <img src={Arrow} />
                  </Button>
                </div>
                {/* <img src={soback} className="soc-img" alt="" /> */}
              </Col>

              <Col md={6} className="align-items-top rounded-0">
                <Card className="sticky-box position-sticky rounded-0">
                  <Card.Body className="p-0 pt-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={index !== 0 ? "mt-4 pt-4 border-top" : ""}
                      >
                        <Row className="align-items-top inner-set">
                          <Col xs="auto img-hide">
                            <div
                              className="position-relative"
                              style={{ width: "110px", height: "80px" }}
                            >
                              <img
                                src={testimonial.image}
                                alt=""
                                className="img-fluid "
                              />
                            </div>
                          </Col>
                          <Col className="px-4">
                            <div className="position-relative">
                              <div
                                className="position-absolute"
                                style={{ top: "-50px", right: "0" }}
                              >
                                <span
                                  className="text-muted"
                                  style={{ fontSize: "40px", opacity: "0.2" }}
                                >
                                  <img src={testi} />
                                </span>
                              </div>
                              <h5 className="mb-2 socail-name">
                                {testimonial.name}
                              </h5>
                              <p className="text-muted mb-0 social-p">
                                {testimonial.text}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="featured blogs" ref={blogsectionRef}>
          <div className="featured-floating-imgs">
            <div className="image-stack image-stack-1">
              <img
                ref={(el) => (BlogimageRefs.current[0] = el)}
                className="initial-image"
                src={Logo1}
                alt="img1"
              />
              <img
                ref={(el) => (BlogimageRefs.current[1] = el)}
                className="initial-image"
                src={Logo1}
                alt="img2"
              />
              <img
                ref={(el) => (BlogimageRefs.current[2] = el)}
                className="initial-image"
                src={Logo1}
                alt="img3"
              />
            </div>
          </div>
          <Container className="">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">

                <h2 className="same-head">Latest Blogs</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col
                md={4}
                className="align-items-end text-end align-content-center"
              >
                <Button variant="dark">See more Blogs</Button>
              </Col>
            </Row>
            <Row>
              {Blogs.map((Blogs, index) => (
                <Col md={4} key={Blogs.id} className="features-list p-0">
                  {/* <Card className=" position-relative"> */}
                  <Card
                    ref={(el) => (BlogsboxRefs.current[index] = el)} // Applied ref to each card
                    className={`position-relative custom-card card-${index}  box-${index}`} // Added box classes
                  >
                    <Card.Img
                      variant="top"
                      src={Blogs.image}
                      alt={Blogs.title}
                    />
                    <Card.Body className="uper-space">
                      <Card.Text className="mb-4 btn-loc top-set">
                        <span className="black">{Blogs.date}</span>
                        <span>{Blogs.catagory} SDFSDF</span>
                      </Card.Text>
                      <Card.Title>{Blogs.name}</Card.Title>

                      <Card.Text className="text-primary font-weight-bold">
                        {Blogs.text}
                      </Card.Text>
                      <Button className="Up-arrow-btn" href="/details">
                        <img src={Arrow} />
                      </Button>
                    </Card.Body>
                  </Card>
                  {/* <img
                    ref={(el) => (BlogBottomImageRefs.current[index] = el)}
                    className="bottom-image"
                    src={Blogs.BlogImage}
                    alt={`bottom-img-${Blogs.id}`}
                  /> */}
                </Col>
              ))}
            </Row>
          </Container>
        </section>
          <div className="position relative" ref={BlogsBottomsectionRef} >

        </div>
      </main>
    </>
  );
}

export default Home;


