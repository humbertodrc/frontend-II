import { FC, useContext, useState } from "react";
import { CardContext } from './CardContext';
import { ItemProps, ListProps } from './interface';


export function Card({children}: {children: React.ReactNode}) {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

	return (
		<div className="card">
      <CardContext.Provider value={{hanldeToggle: handleToggle, toggle}}>
        {children}
      </CardContext.Provider>
		</div>
	);
}

const Toggle = () => {

  const {hanldeToggle} = useContext(CardContext)

	return (
		<div className="card-btn" onClick={hanldeToggle}>
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="css-i6dzq1"
			>
				<circle cx="12" cy="12" r="1" />
				<circle cx="19" cy="12" r="1" />
				<circle cx="5" cy="12" r="1" />
			</svg>
		</div>
	);
};



const List: FC<ListProps> = ({ children }) => {

  const {toggle} = useContext(CardContext)

  return toggle ? <ul className='card-list'>{children }</ul> : null;
};



const Item : FC<ItemProps> = ({ children }) => {
  return <li className='card-item'>{children}</li>
};

Card.Toggle = Toggle;
Card.List = List;
Card.Item = Item;
