import { Personaje, PersonajePorDefecto } from '../main';


export const crearPersonajesPorDefecto = (personajes: PersonajePorDefecto[]) => (
	personajes.map((personaje) => new Personaje(personaje.nombre, personaje.elemento, personaje.avatar))
)