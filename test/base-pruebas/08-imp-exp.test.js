import {
  getHeroeById,
  getHeroesByOwner
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getheroeById debe retornar un heroe por ID', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getheroeById debe retornar undefined si no existe el id', () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con heroes de DC ', () => {
    const heroesTest = getHeroesByOwner('DC');
    expect(heroesTest).toEqual(heroes.filter(heroe => heroe.owner === 'DC'));
  });

  test('getHeroesByOwner debe retornar un arreglo con heroes de Marvel ', () => {
    const owner = getHeroesByOwner('Marvel');
    expect(owner.length).toEqual(2);
  });
});
