// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CircularProgress, {
//   circularProgressclassNamees,
// } from '@mui/material/CircularProgress';
// import LinearProgress, { linearProgressclassNamees } from '@mui/material/LinearProgress';

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressclassNamees.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressclassNamees.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
//   },
// }));

// // Inspired by the former Facebook spinners.
// function FacebookCircularProgress(props) {
//   return (
//     <Box sx={{ position: 'relative', left:"50%" }}>
//       <CircularProgress
//         variant="determinate"
//         sx={{
//           color: (theme) =>
//             theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//         }}
//         size={40}
//         thickness={4}
//         {...props}
//         value={100}
//       />
//       <CircularProgress
//         variant="indeterminate"
//         disableShrink
//         sx={{
//           color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
//           animationDuration: '550ms',
//           position: 'absolute',
//           left: 0,
//           [`& .${circularProgressclassNamees.circle}`]: {
//             strokeLinecap: 'round',
//           },
//         }}
//         size={40}
//         thickness={4}
//         {...props}
//       />
//     </Box>
//   );
// }

export default function Loading() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <FacebookCircularProgress />
    //   <br />
    //   {/* <BorderLinearProgress variant="determinate" value={50} /> */}
    // </Box>


    <div className="d-flex justify-content-center mt-5">
    <div className="boxes mt-5">
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
    </div>
  );
}
