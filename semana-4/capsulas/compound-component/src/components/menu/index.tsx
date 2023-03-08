import {Card} from "../card";

const Menu = () => {
	return (
		<Card>
			<Card.Toggle />
			<Card.List>
				<Card.Item>Me gusta</Card.Item>
				<Card.Item>Comentar</Card.Item>
				<Card.Item>Compartir</Card.Item>
			</Card.List>
		</Card>
	);
};

export default Menu;
