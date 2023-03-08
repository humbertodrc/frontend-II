import { FC } from 'react';
import Hoc from '../../hoc';
import Character from '../character';

interface WrappedProps {
  changeState: () => void;
  logged: boolean;
}


const Wrapped: FC<WrappedProps> =({ changeState }) => {
  return (
    <div className='container'>
      <h1>Orkut</h1>
      <button onClick={changeState}>Salir</button>
      <Character />
    </div>
  );
}

export default Hoc(Wrapped);
