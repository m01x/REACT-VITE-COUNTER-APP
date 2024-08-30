import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe de retornar un URL de la imagen', async () => {
    //no vamos a utilizar el done()
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe('string');
  });
});
