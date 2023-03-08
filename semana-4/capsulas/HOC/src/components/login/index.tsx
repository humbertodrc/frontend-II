import { FC } from "react";

interface LoginProps {
  changeState: () => void;
}


const Login: FC<LoginProps> = ({ changeState }) => {
  return (
    <>
      <h1>Entrar en Orkut</h1>
      <button onClick={changeState}>Entrar</button>
    </>
  );
};
export default Login;
