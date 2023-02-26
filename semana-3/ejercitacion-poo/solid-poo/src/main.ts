import Lamborghini from './lamborghini';
import './style.css'



const lamborghini = new Lamborghini();
lamborghini.accelerate(25); // BOOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `works`