import {render, screen} from '@testing-library/react';
import Card from './card';

test("MOSTRA O NOME DO PRODUTO", () => {
    render(
        <Card title={"Carro Gamer"} price={90.90}/>
    );
    expect(screen.getByText("Carro Gamer")).toBeInTheDocument();
});