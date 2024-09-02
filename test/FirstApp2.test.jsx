import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  const title = `Hola, Soy Goku`;
  const subTitle = `soy un subtitulo`;

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    //screen.debug() para ver el snapshot... el screen se graba despues de un render, sino no mostrara nada.
  });

  test('debe de mostrar el titulo en un H1 ', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('Debe mostrar el subtitulo enviado por props ', () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle)).toBeTruthy();
  });
});
