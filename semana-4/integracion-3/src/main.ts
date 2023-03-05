
export const elementos = {
	agua: {
		nombre: "Agua",
		logo: "./assets/agua.png",
		debilidad: "Tierra",
		fuerza: 30,
		vida: 100,
		defensa: 40,
		velocidad: 70,
	},
	fuego: {
		nombre: "Fuego",
		logo: "./assets/fuego.png",
		debilidad: "Agua",
		fuerza: 50,
		vida: 90,
		defensa: 50,
		velocidad: 60,
	},
	tierra: {
		nombre: "Tierra",
		logo: "./assets/tierra.png",
		debilidad: "Aire",
		fuerza: 40,
		vida: 80,
		defensa: 60,
		velocidad: 50,
	},
	aire: {
		nombre: "Aire",
		logo: "./assets/aire.png",
		debilidad: "Fuego",
		fuerza: 30,
		vida: 80,
		defensa: 40,
		velocidad: 80,
	},
};


export const personajesPorDefecto = [
	{
		nombre: "Aquagirl",
		elemento: elementos.agua.nombre,
		avatar:
			"https://i.pinimg.com/564x/e8/a6/7b/e8a67b8241f508dcfd67623ed400f6fb.jpg",
	},
	{
		nombre: "Windstorm",
		elemento: elementos.aire.nombre,
		avatar:
			"https://i.pinimg.com/564x/9b/2f/b1/9b2fb11fb0e56b914edf1ae2c15d55fa.jpg",
	},
	{
		nombre: "Firegirl",
		elemento: elementos.fuego.nombre,
		avatar:
			"https://i.pinimg.com/564x/84/09/58/84095862a57e6bd18f2b392f52bbd0d6.jpg",
	},
	{
		nombre: "Earthquake",
		elemento: elementos.tierra.nombre,
		avatar:
			"https://i.pinimg.com/564x/2b/ac/3a/2bac3a5eb353e08e25a609993798a774.jpg",
	},
];


export const TarjetaPersonaje = (personaje: any) => `
<div class="card shadow-sm">
  <div class="card-header">
    <img src=${personaje.avatar} alt="${personaje.nombre}" class="bd-placeholder-img card-img-top"/>
    <img src="${personaje.logo}" alt="${personaje.elemento}" class="logo-elemento" />
  </div>
  <div class="card-body">
      <h5 class="card-title">${personaje.nombre}</h5>
      <small class="text-muted">${personaje.elemento}</small>
      <ul>
          <li><i>Fuerza:</i> <span>${personaje.fuerza}</span></li>
          <li><i>Vida:</i> <span>${personaje.vida}</span></li>
          <li><i>Defensa:</i> <span>${personaje.defensa}</span></li>
          <li><i>Velocidad:</i> <span>${personaje.velocidad}</span></li>
      </ul>
      </p>
      <div class="d-flex justify-content-between align-items-center">
      </div>
  </div>
</div>
`;

const $BTN_AGREGAR_PERSONAJE = document.querySelector<HTMLButtonElement>("#crear-personaje") as HTMLButtonElement;

$BTN_AGREGAR_PERSONAJE.addEventListener("click", (event) => {
  event.preventDefault();
  const nombre = document.querySelector<HTMLInputElement>("#nombre-personaje") as HTMLInputElement;
  const elemento = document.querySelector<HTMLSelectElement>("#elemento-personaje") as HTMLSelectElement;
  const avatar = document.querySelector<HTMLInputElement>("#avatar-personaje") as HTMLInputElement;

	if (nombre && elemento && avatar) {
		// Aquí creamos el personaje y lo agregamos a la lista de personajes.
	}
});

window.addEventListener("load", () => {
	// Aquí creamos la lista de personajes iniciales que se mostrarán en la página.
});
