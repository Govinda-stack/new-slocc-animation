import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Homepage';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Details from './Blogs/Blog-detail';
import './Responsive.css'


export default function App() {
  return (
    <BrowserRouter >

    <Routes>


      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Details" element={<Details />} />



      </Route>

    </Routes>
  </BrowserRouter>
  )
}


// import React, { useEffect, useState } from 'react';

// function App() {
//   const [scrollY, setScrollY] = useState(0);

//   // Track scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Calculate progress (0 to 1) for both animations based on scroll
//   const maxScrollFirst = 500; // Controls speed of first animation
//   const maxScrollSecond = 1000; // Controls speed of second animation, starts after first
//   const progressFirst = Math.min(scrollY / maxScrollFirst, 1);
//   const progressSecond = Math.min(Math.max((scrollY - maxScrollFirst) / (maxScrollSecond - maxScrollFirst), 0), 1);

//   // Define the horizontal offset for the target row (first section, to the right)
//   const targetOffsetX = 50;
//   const imageSpacing = 50;
//   const targetPositions = [
//     { x: targetOffsetX - imageSpacing, y: 80 }, // Left image
//     { x: targetOffsetX, y: 80 },               // Center image
//     { x: targetOffsetX + imageSpacing, y: 80 }, // Right image
//   ];

//   // Define positions for the second section (inverse: three images merge to one)
//   const startPositionsSecond = [
//     { x: -imageSpacing, y: 0 }, // Left image
//     { x: 0, y: 0 },            // Center image
//     { x: imageSpacing, y: 0 },  // Right image
//   ];

//   return (
//     <div style={{ textAlign: 'center', marginTop: '100px', minHeight: '300vh' }}>
//       <h2>Scroll Down Images Animation</h2>

//       {/* First Section: One image splits into three */}
//       <div style={styles.imageContainer}>
//         <div style={styles.startRow}>
//           <div style={styles.imageWrapper}>
//             <img
//               src="https://picsum.photos/id/100/15/15"
//               alt="start"
//               style={styles.borderImage}
//             />
//             {targetPositions.map((pos, index) => (
//               <img
//                 key={index}
//                 src={`https://picsum.photos/id/${101 + index}/11/11`}
//                 alt={`moving-${index}`}
//                 style={{
//                   ...styles.movingImage,
//                   transform: `translate(${progressFirst * pos.x}px, ${progressFirst * pos.y}px)`,
//                   opacity: progressFirst > 0 ? 1 : 0.5,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//         <div style={{ ...styles.targetRow, transform: `translateX(${targetOffsetX}px)` }}>
//           {targetPositions.map((_, index) => (
//             <img
//               key={index}
//               src={`https://picsum.photos/id/${101 + index}/15/15`}
//               alt={`target-${index}`}
//               style={styles.borderImage}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Second Section: Three images merge into one */}
//       <div style={{ ...styles.imageContainer, top: '70%' }}>
//         <div style={styles.startRow}>
//           {startPositionsSecond.map((_, index) => (
//             <img
//               key={index}
//               src={`https://picsum.photos/id/${104 + index}/15/15`} // Different images for distinction
//               alt={`start-second-${index}`}
//               style={styles.borderImage}
//             />
//           ))}
//         </div>
//         <div style={styles.targetRow}>
//           <div style={styles.imageWrapper}>
//             <img
//               src="https://picsum.photos/id/107/15/15"
//               alt="target-second"
//               style={styles.borderImage}
//             />
//             {startPositionsSecond.map((pos, index) => (
//               <img
//                 key={index}
//                 src={`https://picsum.photos/id/${104 + index}/11/11`}
//                 alt={`moving-second-${index}`}
//                 style={{
//                   ...styles.movingImage,
//                   transform: `translate(${(1 - progressSecond) * pos.x}px, ${(1 - progressSecond) * -80}px)`,
//                   opacity: progressSecond < 1 ? 1 : 0.5,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   imageContainer: {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '150px',
//     height: '120px',
//   },
//   startRow: {
//     position: 'absolute',
//     top: '0',
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '100px',
//   },
//   targetRow: {
//     position: 'absolute',
//     top: '80px',
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100px',
//   },
//   imageWrapper: {
//     position: 'relative',
//     width: '15px',
//     height: '15px',
//   },
//   borderImage: {
//     width: '15px',
//     height: '15px',
//     objectFit: 'contain',
//     position: 'relative',
//     flexShrink: 0,
//   },
//   movingImage: {
//     width: '11px',
//     height: '11px',
//     objectFit: 'contain',
//     position: 'absolute',
//     top: '2px',
//     left: '2px',
//     transition: 'transform 0.1s linear, opacity 0.1s linear',
//   },
// };

// export default App;