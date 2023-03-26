import {FC} from "react";
import {Character} from "../../types/character.types";

export type CardProps = {
    character: Character
}

const Card:FC<CardProps> = ({character}: CardProps) => {
   return <div>

    </div>
}

export default Card;