import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  test('Debe hacer match con el snapshot', () => {
    //con React Testing Library, ahora tenemos el pdoer de llamar a la funcion render.. ahi nosotros montamos nuestro componente
    //

    const title = 'Hola soy Goku';
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el titulo en un H1', () => {
    const title = 'Hola soy Goku';
    const { container, getByText } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    //el container, del render, es un montaje de todo lo que esta dentro del componente renderizado, es como un dom virtual
    const h1 = container.querySelector('h1');
    console.log(h1.innerHTML);
    expect(h1.innerHTML).toContain(title);
  });
});
