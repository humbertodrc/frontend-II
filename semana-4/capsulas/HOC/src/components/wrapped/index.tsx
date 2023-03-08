import { FC } from 'react';
import Character from '../character';

interface WrappedProps {
  changeState: () => void;
  logged: boolean;
}


const Wrapped: FC<WrappedProps> =({ changeState,logged }) => {
  return (
    <div>
      <h1>Orkut</h1>
      <button onClick={changeState}>Salir</button>
      <Character />
    </div>
  );
}

export default Wrapped;
