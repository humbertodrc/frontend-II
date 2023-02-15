export interface Characters {
	id: number;
	title: string;
	image: string;
	desc: string;
	alt: string;
	status: string;
}

export const characters = [
	{
		id: 1,
		title: "Rick Sanchez",
		image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
		desc: "Sanchez é um cientista alcoólatra misantrópico inspirado no Dr. Emmett Brown de Christopher Lloyd de Back to the Future e Reed Richards da Marvel Comics.",
		alt: "Rick Sanchez",
		status: "Vivo",
	},
	{
		id: 2,
		title: "Morty Smith",
		image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
		desc: "Morty é um ansioso garoto de 14 anos baseado em Marty McFly de Michael J. Fox em Back to the Future.",
		alt: "Morty Smith",
		status: "Vivo",
	},
	{
		id: 3,
		title: "Summer Smith",
		image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
		desc: "Summer é uma adolescente convencional e muitas vezes superficial e inicialmente de 17 anos, que está obcecada em melhorar seu status social entre seus pares.",
		alt: "Summer Smith",
		status: "Vivo",
	},
];
