describe('Pruebas en <DemoComponent/>', () => {
  //Esto es un titulo, agruparemos un set de pruebas

  test('Esta prueba, o falla', () => {
    //Esto es un subtitulo, que estas probando?
    //Etapas de las pruebas
    //1. inicializacion
    const message1 = 'Hola mundo';
    //2. Estimulo
    const message2 = message1.trim();
    //3. Observar el comportamiento
    expect(message1).toBe(message2);
  });
});
