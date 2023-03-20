interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  origin: {
    name: string;
  };
  episode: string[];
}

export default Character;
