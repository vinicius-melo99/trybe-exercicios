const { expect } = require('expect');
const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./script');

describe('Função sum', () => {

    test('Verifica se a soma entre 4 e 5 é 9', () =>{
        expect(sum(4, 5)).toBe(9);
    });

    test('Verifica se a soma entre 0 e 0 é 0', () =>{
        expect(sum(0, 0)).toBe(0);
    });

    test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () =>{
        expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
    });
});

describe('Função myRemove', () => {

    test('Verifica se retorna o array [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('Verifica se não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Verifica se retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Função myFizzBuzz', () => {

    test('Verifica se ao passar o número 15, o retorno é: fizzbuzz', () =>{
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    test('Verifica se ao passar o número 9, o retorno é: fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    test('Verifica se ao passar o número 20, o retorno é: buzz', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    });

    test('Verifica se ao passar o número 14, o retorno é o próprio número', () =>{ 
        expect(myFizzBuzz(14)).toBe(14);
    });

    test('Verifica que se ao passar um parâmetro que não seja um número, o retorno seja false', () => {
        expect(myFizzBuzz('sou uma string')).toBeFalsy();
    });
});

describe('Funções encode e decode', () => {

    test('Verifica se a função encode existe', () => {
        expect(typeof encode).toBe('function');
    });

    test('Verifica se a função decode existe', () => {
        expect(typeof decode).toBe('function');
    });

    test("Verifica se a função encode converte as vogais 'a, e, i, o, u' em '1, 2, 3, 4 e 5' respectivamente", () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });

    test("Verifica se a função decode converte os números '1, 2, 3, 4 e 5' em 'a, e, i, o, u' respectivamente", () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });

    test("Verifica se a função encode não converte as letras 'p, q, r, s, t' em '1, 2, 3, 4 e 5' respectivamente", () => {
        expect(encode('p, q, r, s, t')).not.toBe('1, 2, 3, 4, 5');
    });

    test("Verifica se a função decode não converte os numeros '6, 7, 8, 9 e 10' em 'a, e, i, o, u' respectivamente", () => {
        expect(decode('6, 7, 8, 9 e 10')).not.toBe('a, e, i, o, u');
    });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});