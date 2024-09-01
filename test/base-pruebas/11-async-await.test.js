import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe de retornar un error si no tenemos api key', async () => {
    //no vamos a utilizar el done()
    const resp = await getImagen();

    expect(resp).toBe('No se encontro la imagen');
    //Ojo, puse un error en la consulta a la api, revisar xd
  });
});
