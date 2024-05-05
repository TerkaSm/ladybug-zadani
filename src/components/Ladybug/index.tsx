// import './style.css';

// export enum Direction {
//   up = 'up',
//   right = 'right',
//   down = 'down',
//   left = 'left'
// }

// interface ILadybug
// {
//   posX: number;
//   posY: number;
//   orientation: Direction;
// }

// export const Ladybug : React.FC<ILadybug> = ({ posX, posY, orientation }) => {
//   return (
//     <div
//       className={`ladybug ladybug--${orientation}`}
//       style={{
//         top: `${posX}px`,
//         left: `${posY}px`,
//       }}
//     />
//   );
// };

// export default Ladybug;

import React from 'react';
import './style.css';

export enum Direction {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left'
}

interface LadyBugProps {
  ladyBugState: {
    posX: number;
    posY: number;
    orientation: Direction;
  };
}

const Ladybug: React.FC<LadyBugProps> = ({ ladyBugState }) => {
  const { posX, posY, orientation } = ladyBugState;

  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;
