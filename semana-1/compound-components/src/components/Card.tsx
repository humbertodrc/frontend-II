interface ICardProps{
	children?: React.ReactNode;
	src?: string;
	alt?: string;
}


const Card = ({ children }:  ICardProps) => {
	return (
		<article>
			{children}
		</article>
	);
};

Card.Body = function CardBody({ children }: ICardProps) {
	return <div>{children}</div>;
};

Card.Title = function CardTitle({ children }: ICardProps) {
	return <h2>{children}</h2>;
};

Card.Img = function CardImg({ src, alt }: ICardProps) {
	return <img src={src} alt={alt} />;
};

Card.Text = function CardText({ children }: ICardProps) {
	return <p>{children}</p>;
};

Card.Status = function CardStatus({ children }: ICardProps) {
	return <h3>{children}</h3>;
};

export default Card;


