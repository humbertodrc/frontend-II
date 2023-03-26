import {render, screen} from "@testing-library/react";
import Card from "./card.component";
import {Character} from "../../types/character.types";

const CharacterDefault:Character = {
    name: 'John Doe',
    image: null,
    followers: 0
}

const CharacterFull:Character = {
    name: 'John Doe',
    image: 'http://google.com',
    followers: 2
}

describe('Card', () => {
    describe('when render default state', () => {
        it('should render name', async () => {
            render(<Card character={CharacterDefault}/>);
            expect(screen.getByText('John Doe')).toBeInTheDocument();
        })
        it('should not render profile pic', async () => {
            render(<Card character={CharacterDefault}/>);
            expect(screen.queryByAltText('John Doe')).not.toBeInTheDocument();
        })
        it('should render without followers', async () => {
            render(<Card character={CharacterDefault}/>);
            expect(screen.getByText('No followers yet')).toBeInTheDocument();
        })
    })
    describe('when render with full data', () => {
        it('should render name', async () => {
            render(<Card character={CharacterFull}/>);
            expect(screen.getByText('John Doe')).toBeInTheDocument();
        })
        it('should  render profile pic', async () => {
            render(<Card character={CharacterFull}/>);
            expect(screen.getByAltText('John Doe')).toBeInTheDocument();
        })
        it('should render with followers', async () => {
            render(<Card character={CharacterFull}/>);
            expect(screen.getByText('2 followers')).toBeInTheDocument();
        })
    })
})