import 'features/characters/characters.css';
import Character from './characters.types';

import { charactersApi } from './characters.endpoints';
import CharactersComponent, { CharactersComponentProps } from './characters.component';

export { CharactersComponent, charactersApi };
export type { Character, CharactersComponentProps };
