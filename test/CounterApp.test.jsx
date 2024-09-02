import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp/>', () => {
  const valor = 100;
  test('Debe hacer match con el snapshot ', () => {
    const { container } = render(<CounterApp value={valor} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor inicial de 100', () => {
    render(<CounterApp value={valor} />);

    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
    //   '100'
    // );
  });

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={10} />);
    fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText('11')).toBeTruthy();
  });

  test('debe de decrementar con el boton +1', () => {
    render(<CounterApp value={10} />);
    fireEvent.click(screen.getByText('-1'));
    screen.debug(); // Para ver como esta el screen... muy util.
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('debe de funcionar el boton de reset', () => {
    render(<CounterApp value={10} />);

    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));

    //fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    //screen.debug(); , el valor es 10 nuevamente, por el evento reset.
    expect(screen.getByText('10')).toBeTruthy();
  });
});
