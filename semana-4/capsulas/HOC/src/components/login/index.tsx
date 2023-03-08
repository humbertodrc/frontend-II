import { FC } from "react";

interface LoginProps {
  changeState: () => void;
}


const Login: FC<LoginProps> = ({ changeState }) => {
  return (
    <div className='container'>
      <h1>Entrar en Orkut</h1>
      <button onClick={changeState}>Entrar</button>
    </div>
  );
};
export default Login;
