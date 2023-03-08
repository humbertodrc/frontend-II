import { ComponentType } from 'react';
import Login from '../components/login';

interface HocProps {
  logged: boolean;
  changeState: () => void;
}

const Hoc = <T extends HocProps>(Component: ComponentType<T>) => {
  return (props: T) => {
    return (
      <>
        {props.logged ? <Component {...props} /> : <Login {...props} />}
      </>
    )
  }
};

export default Hoc;
