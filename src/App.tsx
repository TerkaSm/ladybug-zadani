import { useState } from 'react';
import Ladybug from './components/Ladybug';
import { Direction } from './components/Ladybug';

const STEP_SIZE = 25;

interface LadyBug {
  posX: number;
  posY: number;
  orientation: Direction;
}

export const App: React.FC = () => {
  const [ladyBugState, setLadyBugState] = useState<LadyBug>({
    posX: 100,
    posY: 100,
    orientation: Direction.right
  })

  const handleKeyDown = ({ code }:React.KeyboardEvent<HTMLDivElement>) => {
    const newLadyBugState = { ...ladyBugState };

    if (code === 'ArrowUp') {
      newLadyBugState.posX -= STEP_SIZE;
      newLadyBugState.orientation = Direction.up;
      setLadyBugState(newLadyBugState);
    } else if (code === 'ArrowLeft') {
      newLadyBugState.posY -= STEP_SIZE;
      newLadyBugState.orientation = Direction.left;
      setLadyBugState(newLadyBugState);
    } else if (code === 'ArrowRight') {
      newLadyBugState.posY += STEP_SIZE;
      newLadyBugState.orientation = Direction.right;
      setLadyBugState(newLadyBugState);
    } else if (code === 'ArrowDown') {
      newLadyBugState.posX += STEP_SIZE;
      newLadyBugState.orientation = Direction.down;
      setLadyBugState(newLadyBugState);
    }
  };

  return (
    <div
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyDown}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug ladyBugState={ladyBugState} />
    </div>
  );
};

export default App;
