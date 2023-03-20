import { FC, PropsWithChildren } from 'react';

const CardBody: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <div className={'card-body'}>{children}</div>
);

export default CardBody;
